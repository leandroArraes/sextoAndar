import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do CORS para permitir todas as origens
  app.enableCors({
    origin: '*', // Permite solicitações de qualquer origem
  });

  const config = new DocumentBuilder()
    .setTitle('Sexto Andar')
    .setDescription('Documentação da API de imoves')
    .setVersion('1.0')
    .addTag('imoveis')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3500);
}
bootstrap();
