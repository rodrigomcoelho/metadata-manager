import { Module } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { BusinessUnitsRepository } from "./repositories/businessUnits.repository";
import { PrismaBusinessUnitsRepository } from "./repositories/prisma/businessUnits.repository";
import { BusinessUnitsController } from "./businessUnits.controller";

@Module({
  controllers: [BusinessUnitsController],
  providers: [
    PrismaService,
    {
      provide: BusinessUnitsRepository,
      useClass: PrismaBusinessUnitsRepository,
    },
  ],
})
export class BusinessUnitsModule {}
