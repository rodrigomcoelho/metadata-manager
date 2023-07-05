import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { ContractFieldsRepository } from "../contract-fields.repository";
import { CreateContractFieldsDto } from "../../dto/create-contract-fields.dto";
import { UpdateContractFieldsDto } from "../../dto/update-contract-fields.dto";
import { ContractFieldsEntity } from "../../entities/contract-fields.entity";

@Injectable()
export class PrismaContractFieldsRepository
  implements ContractFieldsRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createContractFieldsDto: CreateContractFieldsDto,
  ): Promise<ContractFieldsEntity> {
    const contractField = await this.prisma.contractField.create({
      data: createContractFieldsDto,
    });

    return contractField;
  }

  async update(
    fieldId: string,
    updateContrqactFieldsDto: UpdateContractFieldsDto,
  ): Promise<ContractFieldsEntity> {
    const foundContractField = await this.prisma.contractField.findUnique({
      where: { id: fieldId },
    });

    if (!foundContractField) return;

    return await this.prisma.contractField.update({
      where: { id: foundContractField.id },
      data: updateContrqactFieldsDto,
    });
  }
  async getFieldsByContractId(
    contractId: string,
  ): Promise<ContractFieldsEntity[]> {
    return await this.prisma.contractField.findMany({ where: { contractId } });
  }
}
