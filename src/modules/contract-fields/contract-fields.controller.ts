import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateContractFieldsDto } from "./dto/create-contract-fields.dto";
import { ContractFieldsEntity } from "./entities/contract-fields.entity";
import { ContractFieldsRepository } from "./repositories/contract-fields.repository";
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from "@nestjs/swagger";
import { UpdateContractFieldsDto } from "./dto/update-contract-fields.dto";

@ApiTags("Contract Fields")
@Controller("contract-fields")
export class ContractFieldsController {
  constructor(
    private readonly contractFieldsRepository: ContractFieldsRepository,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: ContractFieldsEntity })
  async create(
    @Body() createContractFieldsDto: CreateContractFieldsDto,
  ): Promise<ContractFieldsEntity> {
    return await this.contractFieldsRepository.create(createContractFieldsDto);
  }

  @ApiOkResponse({ type: ContractFieldsEntity, isArray: true })
  @ApiNotFoundResponse({ description: "No Contract lines found" })
  @Get(":contractId")
  async getContractFields(
    @Param("contractId") contractId: string,
  ): Promise<ContractFieldsEntity[]> {
    const contractFields =
      await this.contractFieldsRepository.getFieldsByContractId(contractId);

    if (!contractFields)
      throw new NotFoundException(`Contract fields ${contractId} not found.`);

    return contractFields;
  }

  @ApiCreatedResponse({ type: ContractFieldsEntity })
  @ApiNotFoundResponse({ description: "No lines found" })
  @Patch(":fieldId")
  async updateByContractId(
    @Param("fieldId") fieldId: string,
    @Body() updateContractFieldDto: UpdateContractFieldsDto,
  ): Promise<ContractFieldsEntity> {
    const updatedContractField = await this.contractFieldsRepository.update(
      fieldId,
      updateContractFieldDto,
    );

    if (!updatedContractField)
      throw new NotFoundException(`Contract field ${fieldId} not found.`);

    return updatedContractField;
  }
}
