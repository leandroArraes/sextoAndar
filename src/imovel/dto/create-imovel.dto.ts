import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Imovel')
export class CreateImovelDto {
  @ApiProperty({
    description: 'Tipo de imóvel, por exemplo, apartamento, casa, etc.',
    example: 'Apartamento',
  })
  tipoImovel: string;

  @ApiProperty({
    description: 'Endereço completo do imóvel.',
    example: 'Rua das Flores, 123, Jardim das Rosas, São Paulo, SP',
  })
  endereco: string;

  @ApiProperty({
    description:
      'Características do imóvel, como número de quartos, banheiros, etc.',
    example: '3 quartos, 2 banheiros, garagem para 2 carros',
  })
  caracteristicas: string;

  @ApiProperty({
    description:
      'Latitude do imóvel. Pode ser usada para localização geográfica.',
    example: '23.550520',
  })
  @Optional()
  latitude: string;

  @ApiProperty({
    description:
      'Longitude do imóvel. Pode ser usada para localização geográfica.',
    example: '-46.633308',
  })
  @Optional()
  longitude: string;

  @ApiProperty({
    description: 'Preço do imóvel.',
    example: '350000',
  })
  preco: string;

  @ApiProperty({
    description: 'Informações adicionais sobre o imóvel.',
    example: 'Imóvel recém-reformado, perto de escolas e comércio.',
  })
  informacoesAdicionais?: string;

  @ApiProperty({
    description: 'Fotos do imóvel. Deve ser uma lista de URLs de imagens.',
    type: [String],
    example: ['https://example.com/foto1.jpg', 'https://example.com/foto2.jpg'],
  })
  fotos: string[];

  @ApiProperty({
    description: 'ID do usuário que está cadastrando o imóvel.',
    example: 1,
  })
  usuarioId: number;

  @ApiProperty({
    description:
      'Status do imóvel, por exemplo,-1 deletado, 0 desativado ,1 disponível,2 vendido,3 alugado.',
    example: 1,
  })
  status: number;
}
