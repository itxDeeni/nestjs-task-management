import { Body, Controller, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signup')
    SignUp(@Body() authcredentialsDto: AuthCredentialsDto): Promise<void>{
        return this.authService.SignUp(authcredentialsDto);
    }
}
