import { Module } from "@nestjs/common";
import { ContractsController } from "./contracts.controller";
import { PrismaService } from "src/database/prisma.service";
import { ContractRepository } from "./repositories/contracts.repository";
import { PrismaContractsRepository } from "./repositories/prisma/contracts.repository";

@Module({
  controllers: [ContractsController],
  providers: [
    PrismaService,
    { provide: ContractRepository, useClass: PrismaContractsRepository },
  ],
})
export class ContractsModule {}
