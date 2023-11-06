import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  UseGuards,
  Put,
  Render,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { LoginUsuarioDto, CreateUsuarioDto, UpdateUsuarioDto } from './dto/';
import { AuthGuard } from '@nestjs/passport';
import { Auth, GetRawHeaders, GetUser } from './decorators';
import { Usuario } from './entities/usuario.entity';
import { UserRoleGuard } from './guards/user-role.guard';
import { RoleProtected } from './decorators/role-protected.decorator';
import { ValidRoles } from './interfaces';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ExecuteResetPasswordDto } from './dto/execute-reset-password.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly usuarioService: AuthService) {}

  @Post('register')
  createUser(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Post('login')
  loginUser(
    @Body()
    loginUsuarioDto: LoginUsuarioDto,
  ) {
    return this.usuarioService.login(loginUsuarioDto);
  }

  @Get('refresh-token')
  @UseGuards(AuthGuard())
  refreshToken(
    @GetUser()
    user: Usuario,
  ) {
    return this.usuarioService.refreshToken(user);
  }

  @Put('reset-password')
  resetPassword(
    @Body()
    resetPasswordDto: ResetPasswordDto,
  ) {
    return this.usuarioService.resetPassword(resetPasswordDto);
  }

  @Put('execute-reset-password')
  @UseGuards(AuthGuard())
  executeResetPassword(
    @GetUser()
    user: Usuario,
    @Body()
    executeResetPasswordDto: ExecuteResetPasswordDto,
  ) {
    return this.usuarioService.executeResetPassword(
      executeResetPasswordDto,
      user,
    );
  }

  @Get('open-reset-password')
  @Render('reset-password')
  openRessetPasswordForm(
    @Query('reset_token')
    reset_token: string,
  ) {
    return { token: reset_token };
  }

  @Get('private')
  @UseGuards(AuthGuard())
  testPrivateRoute(
    @GetUser()
    user: Usuario,
    @GetUser('roles')
    roles: Array<string>,
    @GetRawHeaders()
    rawHeaders: string[],
  ) {
    return {
      ok: true,
      message: 'Saludo desde la Ruta Privada',
      user,
      roles,
      rawHeaders,
    };
  }

  /**endpoint de prueba de control de autorizacion y validacion */
  //@SetMetadata('roles', ['super-admin', 'super-user'])
  @Get('private/rol')
  @RoleProtected(ValidRoles.superUser, ValidRoles.admin, ValidRoles.user)
  @UseGuards(AuthGuard(), UserRoleGuard)
  testPrivateRouteByRol(
    @GetUser()
    user: Usuario,
  ) {
    return {
      user,
    };
  }

  /**endpoint de prueba de control de autorizacion y validacion */
  //@SetMetadata('roles', ['super-admin', 'super-user'])
  @Get('private/rol2')
  @Auth(ValidRoles.superUser, ValidRoles.user)
  testPrivateRouteByRol2(
    @GetUser()
    user: Usuario,
  ) {
    return {
      user,
    };
  }

  @Get('usuarios')
  findAll(
    @Query()
    paginationDto: PaginationDto,
  ) {
    return this.usuarioService.findAll(paginationDto);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usuarioService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
  //   return this.usuarioService.update(+id, updateUsuarioDto);
  // }

  @Delete('usuario/:id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
