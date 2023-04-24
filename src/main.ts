import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
  const logger = new Logger('bootstrap');
  logger.log('server running on port 4000');
}
bootstrap();
