import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //to make sure that the user cant sent a malicious data else than that in the DTO
    forbidNonWhitelisted: true,
    transform:true //assure that the new object is instance of the assigned class
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
