import { Controller, Get, Body, Put, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  me(@Req() req) {
    return this.userService.me(req);
  }

  @Put('me')
  update(@Req() req, @Body() body: UpdateUserDto) {
    return this.userService.update(req, body);
  }
}
