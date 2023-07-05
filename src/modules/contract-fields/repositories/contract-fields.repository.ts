import { CreateContractFieldsDto } from "../dto/create-contract-fields.dto";
import { UpdateContractFieldsDto } from "../dto/update-contract-fields.dto";
import { ContractFieldsEntity } from "../entities/contract-fields.entity";

export abstract class ContractFieldsRepository {
  abstract create(
    createContractFieldsDto: CreateContractFieldsDto,
  ): Promise<ContractFieldsEntity>;

  abstract update(
    fieldId: string,
    updateContrqactFieldsDto: UpdateContractFieldsDto,
  ): Promise<ContractFieldsEntity>;

  abstract getFieldsByContractId(
    contractId: string,
  ): Promise<ContractFieldsEntity[]>;
}
