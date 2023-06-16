import { CreateContractsDto } from "../dto/create-contracts.dto";
import { UpdateContractsDto } from "../dto/updated-contracts.dto";
import { ContractEntity } from "../entities/contract.entity";

export abstract class ContractRepository {
  abstract create(
    createContractsDto: CreateContractsDto,
  ): Promise<ContractEntity>;

  abstract findAll(): Promise<ContractEntity[]>;

  abstract findById(id: string): Promise<ContractEntity>;

  abstract findByExternalId(externalId: string): Promise<ContractEntity>;

  abstract updatedById(
    id: string,
    updatedContractsDto: UpdateContractsDto,
  ): Promise<ContractEntity>;

  abstract deleteById(id: string): Promise<ContractEntity>;
}
