import { Controller, Get, Post, Delete, Patch, Param, Body } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('invoices')
@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get()
  @ApiOperation({ summary: 'Získá všechny faktury' })
  findAll() {
    return this.invoicesService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Vytvoří novou fakturu' })
  create(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.invoicesService.create(createInvoiceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Smaže fakturu podle ID' })
  remove(@Param('id') id: number) {
    return this.invoicesService.remove(id);
  }

  @Patch(':id/approve')
  @ApiOperation({ summary: 'Schválí fakturu' })
  approve(@Param('id') id: number) {
    return this.invoicesService.approve(id);
  }

  @Patch(':id/pay')
  @ApiOperation({ summary: 'Označí fakturu jako zaplacenou' })
  pay(@Param('id') id: number) {
    return this.invoicesService.pay(id);
  }

  @Get('statistics')
  @ApiOperation({ summary: 'Vrátí statistiky faktur' })
  getStatistics() {
    return this.invoicesService.getStatistics();
  }
}
