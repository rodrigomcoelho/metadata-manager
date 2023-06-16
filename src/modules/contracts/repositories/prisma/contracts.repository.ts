import { PrismaService } from "src/database/prisma.service";
import { CreateContractsDto } from "../../dto/create-contracts.dto";
import { UpdateContractsDto } from "../../dto/updated-contracts.dto";
import { ContractEntity } from "../../entities/contract.entity";
import { ContractRepository } from "../contracts.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaContractsRepository implements ContractRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<ContractEntity[]> {
    return await this.prisma.contract.findMany();
  }

  async findById(id: string): Promise<ContractEntity> {
    return await this.prisma.contract.findUnique({ where: { id } });
  }

  async findByExternalId(externalId: string): Promise<ContractEntity> {
    return await this.prisma.contract.findUnique({ where: { externalId } });
  }

  async create(
    createContractsDto: CreateContractsDto,
  ): Promise<ContractEntity> {
    return await this.prisma.contract.create({
      data: createContractsDto,
    });
  }

  async updatedById(
    id: string,
    updatedContractsDto: UpdateContractsDto,
  ): Promise<ContractEntity> {
    const foundContract = await this.prisma.contract.findUnique({
      where: { id },
    });

    if (!foundContract) return;

    return await this.prisma.contract.update({
      where: { id: foundContract.id },
      data: updatedContractsDto,
    });
  }

  async deleteById(id: string): Promise<ContractEntity> {
    const foundContract = await this.prisma.contract.findUnique({
      where: { id },
    });

    if (!foundContract) return;

    return await this.prisma.contract.delete({
      where: { id: foundContract.id },
    });
  }
}
