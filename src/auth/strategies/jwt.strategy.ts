import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Usuario } from '../entities/usuario.entity';
//import { IJwtPayload } from '   ../../../dist/auth/interfaces/payload-jwt.interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IJwtPayload } from '../interfaces/payload-jwt.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET_KEY'),
    });
  }

  /**Este metodo que es parte de la estrategia recibe el payload luego de haber validado el token
   * por este motivo puedo disparar un error con el mensaje de token no valido o manejarlo
   * de manera tal que el metodo forma parte de la estrategia de verificacion del token
   */
  async validate(payload: IJwtPayload): Promise<Usuario> {
    const { id } = payload;
    if (id === undefined) {
      throw new UnauthorizedException('Token no valido');
    }
    const usuario = await this.userRepository.findOneBy({
      id_usuario: id,
    });
    console.log(usuario);
    if (!usuario) {
      throw new UnauthorizedException('Token no valido');
    }
    //TODO: evaluar si devuelve los usuarios softdeleted
    //Es importante recordar que este retorno de una instancia de
    //usuario se agrega a la Request y queda disponible para toda
    //la aplicacion
    return usuario;
  }
}
