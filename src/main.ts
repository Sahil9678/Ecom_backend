import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT)
    .then(() => {
      console.log(`successfully stared on port,${process.env.PORT}`);
    })
    .catch((error) => {
      console.log(error);
    })
}
bootstrap();
