import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { LoginUsuarioDto, CreateUsuarioDto, UpdateUsuarioDto } from './dto/';

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

  @Get()
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

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usuarioService.remove(+id);
  // }
}
