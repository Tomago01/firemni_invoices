import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum InvoiceType {
  PRIJATA = 'prijatá',
  VYSTAVENA = 'vystavená',
}

export enum InvoiceStatus {
  VYSTAVENA = 'vystavená',
  SCHVALENA = 'schválená',
  ZAPLACENA = 'zaplacená',
}

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  cislo: string;

  @Column({ type: 'text' })
  typ: InvoiceType;

  @Column()
  odberatel: string;

  @Column()
  dodavatel: string;

  @Column('decimal')
  castka: number;

  @Column('datetime')
  datumVystaveni: Date;

  @Column('datetime')
  datumSplatnosti: Date;

  @Column({ type: 'datetime', nullable: true })
  datumUhrady?: Date;

  @Column({ type: 'text', default: InvoiceStatus.VYSTAVENA })
  stav: InvoiceStatus;

  @Column({ nullable: true })
  pdfPath?: string;
}
