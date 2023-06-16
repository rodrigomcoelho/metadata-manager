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
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
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
  async delete(@Param("id") id: string): Promise<ContractEntity> {
    const contract = await this.contractRepository.deleteById(id);

    if (!contract) throw new NotFoundException(`Contract ${id} not found.`);

    return contract;
  }
}
