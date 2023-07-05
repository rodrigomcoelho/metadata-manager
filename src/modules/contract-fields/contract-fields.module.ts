import { Module } from "@nestjs/common";
import { ContractFieldsController } from "./contract-fields.controller";
import { PrismaService } from "src/database/prisma.service";
import { ContractFieldsRepository } from "./repositories/contract-fields.repository";
import { PrismaContractFieldsRepository } from "./repositories/prisma/contract-fields.repository";

@Module({
  controllers: [ContractFieldsController],
  providers: [
    PrismaService,
    {
      provide: ContractFieldsRepository,
      useClass: PrismaContractFieldsRepository,
    },
  ],
})
export class ContractFieldsModule {}
