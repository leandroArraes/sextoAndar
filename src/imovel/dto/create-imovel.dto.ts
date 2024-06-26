import { ApiProperty } from '@nestjs/swagger';

export class CreateImovelDto {

  @ApiProperty()
  tipoImovel: string;

  @ApiProperty()
  endereco: string;

  @ApiProperty()
  caracteristicas: string;

  @ApiProperty()
  preco: string;

  @ApiProperty({ nullable: true })
  informacoesAdicionais?: string;

  @ApiProperty({ type: [String] })
  fotos: string[];

  @ApiProperty()
  usuarioId: number;

  @ApiProperty()
  status: number;

}
