import { createBusinessUnitDto } from "../dto/create-businessUnit.dto";
import { UpdateBusinessUnitDto } from "../dto/update-businessUnit.dto";
import { BusinessUnitEntity } from "../entities/businessUnits.entity";

export abstract class BusinessUnitsRepository {
  abstract create(
    createBusinessUnitDTO: createBusinessUnitDto,
  ): Promise<BusinessUnitEntity>;

  abstract findAll(): Promise<BusinessUnitEntity[]>;

  abstract findOne(id: string): Promise<BusinessUnitEntity | undefined>;

  abstract update(
    id: string,
    updateBusinessUnitDto: UpdateBusinessUnitDto,
  ): Promise<BusinessUnitEntity>;

  abstract delete(id: string): Promise<BusinessUnitEntity>;
}
