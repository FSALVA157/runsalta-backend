import { SetMetadata } from '@nestjs/common';
import { ValidRoles } from '../interfaces';

//establezcamos la llave de la metada de roles validos en una variable para prevenir errores y mejorar la mantenibilidad
export const META_ROLES = 'roles';

export const RoleProtected = (...args: ValidRoles[]) => {
  return SetMetadata(META_ROLES, args);
};
