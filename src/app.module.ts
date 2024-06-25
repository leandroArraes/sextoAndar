import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImovelModule } from './imovel/imovel.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [ImovelModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
