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
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ExecuteResetPasswordDto } from './dto/execute-reset-password.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>,
    private readonly jwtService: JwtService,
  ) {}

  async refreshToken(data: any) {
    return {
      id_usuario: data.id_usuario,
      username: data.username,
      token: this.getJwtToken({ id: +data.id_usuario }),
    };
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto): Promise<void> {
    const { email } = resetPasswordDto;
    try {
      const user: Usuario = await this.userRepository.findOneByOrFail({
        email,
      });
      const reset_token_auxiliar = this.getResetPassJwtToken({
        id: user.id_usuario,
      });
      await this.update(user.id_usuario, {
        reset_token: reset_token_auxiliar,
      });
      //TODO: enviar email al usuario con el enlace
      /**
       * Ejemplo de URL que debe armarse para enviar por email
       * http://localhost:3000/api/auth/open-reset-password?reset_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk5MjczNzI3LCJleHAiOjE2OTkyNzU1Mjd9.yGYY1l6ZqkT1dy6HvHEjjKDvKaJ0WdDYtKRvyafQnug
       */
    } catch (error) {
      throw new NotFoundException(
        `El email ${email} no corresponde a un usuario activo`,
      );
    }
  }

  async executeResetPassword(
    executeResetPasswordDto: ExecuteResetPasswordDto,
    usuario: Usuario,
  ) {
    try {
      const { new_password } = executeResetPasswordDto;

      return await this.update(usuario.id_usuario, {
        reset_token: null,
        password: bcrypt.hashSync(new_password, 10),
        //password: new_password,
      });
    } catch (error) {
      handleDBExceptions(error);
    }
  }

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

      //      console.log('datos de usuario en login', user);

      return {
        id_usuario: user.id_usuario,
        username: user.username,
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

  //metodo que genera un token nuevo
  private getResetPassJwtToken(payload: IJwtPayload) {
    //generamos el token la configuracion es la establecida en el JwtModule pero aqui
    //podriamos sobreescribirla
    const token = this.jwtService.sign(payload, {
      expiresIn: '30m',
    });
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
