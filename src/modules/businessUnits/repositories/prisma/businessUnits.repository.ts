import { PrismaService } from "src/database/prisma.service";
import { createBusinessUnitDto } from "../../dto/create-businessUnit.dto";
import { BusinessUnitsRepository } from "../businessUnits.repository";
import { Injectable } from "@nestjs/common";
import { BusinessUnitEntity } from "../../entities/businessUnits.entity";
import { UpdateBusinessUnitDto } from "../../dto/update-businessUnit.dto";

@Injectable()
export class PrismaBusinessUnitsRepository implements BusinessUnitsRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    createBusinessUnitDTO: createBusinessUnitDto,
  ): Promise<BusinessUnitEntity> {
    const businessUnit = await this.prisma.businessUnit.create({
      data: createBusinessUnitDTO,
    });

    return businessUnit;
  }

  async findAll(): Promise<BusinessUnitEntity[]> {
    const businessUnits = await this.prisma.businessUnit.findMany();

    return businessUnits;
  }

  async findOne(id: string): Promise<BusinessUnitEntity> {
    const businessUnit = await this.prisma.businessUnit.findUnique({
      where: { id },
    });

    return businessUnit;
  }

  async update(
    id: string,
    { code, name }: UpdateBusinessUnitDto,
  ): Promise<BusinessUnitEntity> {
    const foundBusinessUnit = await this.prisma.businessUnit.findUnique({
      where: { id },
    });

    if (!foundBusinessUnit) {
      return;
    }

    const updatedBusinessUnit = await this.prisma.businessUnit.update({
      where: { id: foundBusinessUnit.id },
      data: { code, name },
    });

    return updatedBusinessUnit;
  }

  async delete(id: string): Promise<BusinessUnitEntity> {
    return await this.prisma.businessUnit.delete({ where: { id } });
  }
}
