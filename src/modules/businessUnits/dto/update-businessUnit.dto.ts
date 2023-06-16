import { PartialType } from "@nestjs/mapped-types";
import { createBusinessUnitDto } from "./create-businessUnit.dto";

export class UpdateBusinessUnitDto extends PartialType(createBusinessUnitDto) {}
