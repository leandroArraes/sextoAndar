import { Module } from '@nestjs/common';
import { ImovelService } from './imovel.service';
import { ImovelController } from './imovel.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ImovelController],
  imports: [PrismaModule],
  providers: [PrismaService, ImovelService],
})
export class ImovelModule {}
