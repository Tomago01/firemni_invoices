import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice, InvoiceStatus } from './entities/invoice.entity';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
  ) {}

  async findAll(): Promise<Invoice[]> {
    return this.invoiceRepository.find();
  }

  async create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    const invoice = this.invoiceRepository.create(createInvoiceDto);
    return this.invoiceRepository.save(invoice);
  }

  async remove(id: number): Promise<void> {
    await this.invoiceRepository.delete(id);
  }

  async approve(id: number): Promise<Invoice> {
    const invoice = await this.invoiceRepository.findOneBy({ id });
    if (!invoice) throw new Error('Faktura nenalezena');
    invoice.stav = InvoiceStatus.SCHVALENA; // ← použij enum
    return this.invoiceRepository.save(invoice);
  }

  async pay(id: number): Promise<Invoice> {
    const invoice = await this.invoiceRepository.findOneBy({ id });
    if (!invoice) throw new Error('Faktura nenalezena');
    invoice.stav = InvoiceStatus.ZAPLACENA; // ← použij enum
    invoice.datumUhrady = new Date();
    return this.invoiceRepository.save(invoice);
  }

  async getStatistics() {
    const invoices = await this.invoiceRepository.find();
    const paid = invoices.filter(f => f.stav === InvoiceStatus.ZAPLACENA);

    const avgDays = paid.length
    ? paid.reduce((a, f) => {
        if (!f.datumUhrady || !f.datumVystaveni) return a;
        const diff =
            (new Date(f.datumUhrady).getTime() -
            new Date(f.datumVystaveni).getTime()) /
            (1000 * 60 * 60 * 24);
        return a + diff;
        }, 0) / paid.length
    : 0;
    const debtors = invoices
      .filter(f => f.stav !== InvoiceStatus.ZAPLACENA)
      .map(f => f.odberatel);

    return {
      pocetFaktur: invoices.length,
      prumernaDobaZaplaceni: avgDays.toFixed(1),
      nejvetsiDluznici: [...new Set(debtors)],
    };
  }
}
