import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { handleDBExceptions } from 'src/common/filters/handle-exception';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import * as bcrypt from 'bcrypt';
import { LoginUsuarioDto } from './dto';
import { IJwtPayload } from './interfaces/payload-jwt.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>,
    private readonly jwtService: JwtService,
  ) {}
  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const { password, ...usuarioData } = createUsuarioDto;

      const new_user = this.userRepository.create({
        password: bcrypt.hashSync(password, 10),
        ...usuarioData,
      });
      await this.userRepository.save(new_user);
      const data_filtrada = {
        id: new_user.id_usuario,
        nombre: new_user.nombre,
        apellido: new_user.apellido,
        username: new_user.username,
        dni: new_user.dni,
        token: this.getJwtToken({ id: new_user.id_usuario }),
      };
      return data_filtrada;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async login(loginUsuarioDto: LoginUsuarioDto) {
    try {
      const { username, password } = loginUsuarioDto;
      //debido a que en el entity esta invisibilizado el password, no puedo usar findBy para recuperar los datos
      //esto me oblida a usar un querybuilder
      const user = await this.userRepository.findOne({
        where: {
          username,
        },
        select: {
          id_usuario: true,
          username: true,
          password: true,
        },
      });
      if (!user) {
        throw new NotFoundException('Credenciales no validas(username)');
      }
      if (!bcrypt.compareSync(password, user.password)) {
        throw new NotFoundException('Credenciales no validas(clave)');
      }

      console.log('datos de usuario en login', user);

      return {
        ...user,
        token: this.getJwtToken({ id: +user.id_usuario }),
      };
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  //metodo que genera un token nuevo
  private getJwtToken(payload: IJwtPayload) {
    //generamos el token la configuracion es la establecida en el JwtModule pero aqui
    //podriamos sobreescribirla
    const token = this.jwtService.sign(payload);
    return token;
  }

  async findAll(paginationDto: PaginationDto) {
    try {
      const { limit = 0, offset = 0 } = paginationDto;
      const data = await this.userRepository.findAndCount({
        take: limit,
        skip: offset,
      });
      const data_nueva = data[0].map((usuario) => {
        return {
          ...usuario,
          // institucion: legajo.sexo.sexo,
          // equipo_territorial: legajo.equipo_territorial.nombre,
        };
      });
      return {
        data: data_nueva,
        total: data[1],
      };
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.userRepository.findOneOrFail({
        where: { id_usuario: id },
      });
    } catch (error) {
      throw new NotFoundException('No existe el usuario que intenta consultar');
    }
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    try {
      const res = await this.userRepository.update(
        { id_usuario: id },
        updateUsuarioDto,
      );
      if (res.affected == 0)
        throw new NotFoundException(
          'Error No se Actualizo ningún Registro Usuario',
        );
      return res;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    try {
      const res = await this.userRepository.softDelete({ id_usuario: id });
      if (res.affected == 0) throw new Error('No existe el registro a borrar');
      return {
        ...res,
        message: `El Registro ${id} ha sido borrado`,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
      //this.handleDBExceptions(error);
    }
  }
}
