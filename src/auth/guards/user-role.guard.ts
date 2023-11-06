import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { META_ROLES } from '../decorators/role-protected.decorator';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const validRoles: string[] = this.reflector.get(
      META_ROLES,
      context.getHandler(),
    );

    //verificar si existen los valid roles
    if (!validRoles) {
      return true;
    }
    //verificar si existen los valid roles y son un array vacio
    if (validRoles.length === 0) {
      return true;
    }

    //obtengamos los datos del usuario
    const req = context.switchToHttp().getRequest();
    const user = req.user;
    //verifiquemos si existe el usuario o si esta llegando bien desde la estrategia
    if (!user) {
      throw new BadRequestException();
    }
    //verifiquemos los roles del usuario contra los roles inyectados en la metadata
    for (const role of user.roles) {
      if (validRoles.includes(role)) {
        return true;
      }
    }

    throw new ForbiddenException(
      `el usuario ${user.username} debe tener un rol valido [${validRoles}]`,
    );
  }
}
