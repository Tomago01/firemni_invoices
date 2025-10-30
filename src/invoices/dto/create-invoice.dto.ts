import { ApiProperty } from '@nestjs/swagger';
import { InvoiceType } from '../entities/invoice.entity';

export class CreateInvoiceDto {
  @ApiProperty({ example: '2025-INV-001', description: 'Číslo faktury' })
  cislo: string;

  @ApiProperty({ example: 'vystavená', description: 'Typ faktury', enum: ['prijatá', 'vystavená'] })
  typ: InvoiceType;

  @ApiProperty({ example: 'ABC s.r.o.', description: 'Odběratel' })
  odberatel: string;

  @ApiProperty({ example: 'XYZ a.s.', description: 'Dodavatel' })
  dodavatel: string;

  @ApiProperty({ example: 12345.67, description: 'Částka faktury' })
  castka: number;

  @ApiProperty({ example: '2025-10-30', description: 'Datum vystavení' })
  datumVystaveni: Date;

  @ApiProperty({ example: '2025-11-30', description: 'Datum splatnosti' })
  datumSplatnosti: Date;
}
