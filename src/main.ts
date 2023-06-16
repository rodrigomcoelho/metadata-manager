import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { useContainer } from "class-validator";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const swaggerConfig = new DocumentBuilder()
    .setTitle("Metadata Management")
    .setDescription("Metadata Management API")
    .setVersion("0.1.0")
    .build();

  const documentation = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup("api", app, documentation);

  await app.listen(3000);
}
bootstrap();
