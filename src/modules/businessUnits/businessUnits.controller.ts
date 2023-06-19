import { ParseUUIDPipe } from "@nestjs/common";
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
  ApiTags,
} from "@nestjs/swagger";
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
  @ApiNotFoundResponse({ description: "Not found" })
  async getOne(
    @Param("id", ParseUUIDPipe) id: string,
  ): Promise<BusinessUnitEntity> {
    const businessUnit = await this.businessUnitRepository.findOne(id);

    if (!businessUnit) {
      throw new NotFoundException(`Business Unit ${id} not found.`);
    }

    return businessUnit;
  }

  @Get()
  @ApiOkResponse({ type: BusinessUnitEntity, isArray: true })
  async getAll(): Promise<BusinessUnitEntity[]> {
    const businessUnits = await this.businessUnitRepository.findAll();

    return businessUnits;
  }

  @Patch(":id")
  @ApiCreatedResponse({ type: BusinessUnitEntity })
  @ApiNotFoundResponse({ description: "Not found" })
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updatedDto: UpdateBusinessUnitDto,
  ): Promise<BusinessUnitEntity> {
    const businessUnit = await this.businessUnitRepository.update(
      id,
      updatedDto,
    );

    if (!businessUnit) {
      throw new NotFoundException(`Business Unit ${id} not found.`);
    }

    return businessUnit;
  }

  @Post()
  @ApiCreatedResponse({ type: BusinessUnitEntity })
  async create(
    @Body() createBusinessUnitDTO: createBusinessUnitDto,
  ): Promise<BusinessUnitEntity> {
    const businessUnit = await this.businessUnitRepository.create(
      createBusinessUnitDTO,
    );

    return businessUnit;
  }

  @Delete(":id")
  @ApiOkResponse({ type: BusinessUnitEntity })
  @ApiNotFoundResponse({ description: "Not found" })
  async remove(
    @Param("id", ParseUUIDPipe) id: string,
  ): Promise<BusinessUnitEntity> {
    const businessUnit = await this.businessUnitRepository.delete(id);

    if (!businessUnit) {
      throw new NotFoundException(`Business Unit ${id} not found.`);
    }

    return businessUnit;
  }
}
