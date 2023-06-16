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
import { BusinessUnit } from "@prisma/client";
import { createBusinessUnitDto } from "./dto/create-businessUnit.dto";
import { BusinessUnitsRepository } from "./repositories/businessUnits.repository";
import { BusinessUnitEntity } from "./entities/businessUnits.entity";
import { UpdateBusinessUnitDto } from "./dto/update-businessUnit.dto";

@ApiTags("Business Unit")
@Controller("business-units")
export class BusinessUnitsController {
  constructor(
    private readonly businessUnitRepository: BusinessUnitsRepository,
  ) {}

  @Get(":id")
  @ApiOkResponse({ type: BusinessUnitEntity })
  async getOne(@Param("id") id: string): Promise<BusinessUnit> {
    const businessUnit = await this.businessUnitRepository.findOne(id);

    if (!businessUnit) {
      throw new NotFoundException(`Business Unit ${id} not found.`);
    }

    return businessUnit;
  }

  @Get()
  @ApiOkResponse({ type: BusinessUnitEntity, isArray: true })
  async getAll(): Promise<BusinessUnit[]> {
    const businessUnits = await this.businessUnitRepository.findAll();

    return businessUnits;
  }

  @Patch(":id")
  @ApiCreatedResponse({ type: BusinessUnitEntity })
  async update(
    @Param("id") id: string,
    @Body() updatedDto: UpdateBusinessUnitDto,
  ): Promise<BusinessUnit> {
    const businessUnit = this.businessUnitRepository.update(id, updatedDto);

    if (!businessUnit) {
      throw new NotFoundException(`Business Unit ${id} not found.`);
    }

    return businessUnit;
  }

  @Post()
  @ApiCreatedResponse({ type: BusinessUnitEntity })
  async create(
    @Body() createBusinessUnitDTO: createBusinessUnitDto,
  ): Promise<BusinessUnit> {
    const businessUnit = await this.businessUnitRepository.create(
      createBusinessUnitDTO,
    );

    return businessUnit;
  }

  @Delete(":id")
  @ApiOkResponse({ type: BusinessUnitEntity })
  async remove(@Param("id") id: string): Promise<BusinessUnit> {
    return this.businessUnitRepository.delete(id);
  }
}
