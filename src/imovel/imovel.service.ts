import { Injectable } from '@nestjs/common';
import { CreateImovelDto } from './dto/create-imovel.dto';
import { UpdateImovelDto } from './dto/update-imovel.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ImovelService {
  constructor(private prisma: PrismaService) {}

  async create(createImovelDto: CreateImovelDto) {
    const response = await this.prisma.imovel.create({
      data: createImovelDto,
    });
    if (!response) {
      throw new NotFoundException('Erro ao criar um novo imovel');
    }
    return response;
  }

  async findAll() {
    const response = await this.prisma.imovel.findMany();
    if (!response) {
      throw new NotFoundException('Erro ao buscar todos imoveis');
    }
    return response;
  }

  async findAllByUser(usuarioId: number) {
    const response = await this.prisma.imovel.findMany({
      where: {
        usuarioId: usuarioId,
      },
    });
    if (!response) {
      throw new NotFoundException('Erro ao buscar todos imoveis de um usuário');
    }
    return response;
  }

  async findOne(id: number) {
    const response = await this.prisma.imovel.findUnique({
      where: {
        id: id,
      },
    });
    if (!response) {
      throw new NotFoundException('imoveil não encontrado');
    }
    return response;
  }

  async update(id: number, updateImovelDto: UpdateImovelDto) {
    const response = await this.prisma.imovel.update({
      where: {
        id: id,
      },
      data: updateImovelDto,
    });
    if (!response) {
      throw new NotFoundException('erro ao editar imovel');
    }
    return response;
  }

  async remove(id: number) {
    const response = await this.prisma.imovel.update({
      where: {
        id: id,
      },
      data: {
        status: -1,
      },
    });
    if (!response) {
      throw new NotFoundException('erro ao editar imovel');
    }
    return response;
  }
}
