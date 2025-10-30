import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Nastavení Swaggeru
  const config = new DocumentBuilder()
    .setTitle('Firemní faktury API')
    .setDescription('Dokumentace API pro projekt Firemní faktury')
    .setVersion('1.0')
    .addTag('invoices')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`🚀 Aplikace běží na http://localhost:3000`);
  console.log(`📘 Swagger dokumentace: http://localhost:3000/api`);
}
bootstrap();
