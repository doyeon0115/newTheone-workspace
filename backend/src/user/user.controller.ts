import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User successfully registered' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async register(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('name') name: string,
  ) {
    try {
      const user = await this.userService.createUser(email, password, name);
      return { message: 'User created successfully', user: { id: user.id, email: user.email, name: user.name } };
    } catch (error) {
      throw new HttpException('User registration failed', HttpStatus.BAD_REQUEST);
    }
  }

  @Post('find-email')
  @ApiOperation({ summary: 'Find user email by name' })
  @ApiResponse({ status: 200, description: 'Email found successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async findEmail(@Body('name') name: string) {
    const user = await this.userService.findUserByName(name);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return { email: user.email };
  }

  @Post('reset-password')
  @ApiOperation({ summary: 'Reset user password' })
  @ApiResponse({ status: 200, description: 'Password reset successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async resetPassword(
    @Body('email') email: string,
    @Body('newPassword') newPassword: string,
  ) {
    const success = await this.userService.resetPassword(email, newPassword);
    if (!success) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'Password reset successfully' };
  }
} 