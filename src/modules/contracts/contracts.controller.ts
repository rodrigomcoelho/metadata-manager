import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from "@nestjs/swagger";
import { ContractEntity } from "./entities/contract.entity";
import { CreateContractsDto } from "./dto/create-contracts.dto";
import { ContractRepository } from "./repositories/contracts.repository";
import { UpdateContractsDto } from "./dto/updated-contracts.dto";

@ApiTags("Contracts")
@Controller("contracts")
export class ContractsController {
  constructor(private readonly contractRepository: ContractRepository) {}

  @Get("external/:externalId")
  @ApiOkResponse({ type: ContractEntity })
  @ApiNotFoundResponse({ description: "Contract not found" })
  @ApiParam({ name: "externalId", description: "External ID of the contract" })
  async getExternalContract(
    @Param("externalId") externalId: string,
  ): Promise<ContractEntity> {
    const contract = await this.contractRepository.findByExternalId(externalId);

    if (!contract)
      throw new NotFoundException(`Contract ${externalId} not found.`);

    return contract;
  }

  @Get(":id")
  @ApiOkResponse({ type: ContractEntity })
  @ApiNotFoundResponse({ description: "Contract not found" })
  @ApiParam({ name: "id", description: "ID of the contract" })
  async getOne(@Param("id") id: string): Promise<ContractEntity> {
    const contract = await this.contractRepository.findById(id);

    if (!contract) throw new NotFoundException(`Contract ${id} not found.`);

    return contract;
  }

  @Get()
  @ApiOkResponse({ type: ContractEntity, isArray: true })
  async getAll(): Promise<ContractEntity[]> {
    return await this.contractRepository.findAll();
  }

  @Post()
  @ApiCreatedResponse({ type: ContractEntity })
  async create(
    @Body() createContractDto: CreateContractsDto,
  ): Promise<ContractEntity> {
    return await this.contractRepository.create(createContractDto);
  }

  @Patch(":id")
  @ApiCreatedResponse({ type: ContractEntity })
  @ApiNotFoundResponse({ description: "Contract not found" })
  @ApiParam({ name: "id", description: "ID of the contract" })
  async update(
    @Param("id") id: string,
    @Body() updateContractsDto: UpdateContractsDto,
  ): Promise<ContractEntity> {
    const contract = await this.contractRepository.updatedById(
      id,
      updateContractsDto,
    );

    if (!contract) throw new NotFoundException(`Contract ${id} not found.`);

    return contract;
  }

  @Delete(":id")
  @ApiOkResponse({ type: ContractEntity })
  @ApiNotFoundResponse({ description: "Contract not found" })
  @ApiParam({ name: "id", description: "ID of the contract" })
  async delete(@Param("id") id: string): Promise<ContractEntity> {
    const contract = await this.contractRepository.deleteById(id);

    if (!contract) throw new NotFoundException(`Contract ${id} not found.`);

    return contract;
  }
}
