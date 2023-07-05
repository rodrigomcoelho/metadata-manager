import { PartialType } from "@nestjs/mapped-types";
import { CreateContractFieldsDto } from "./create-contract-fields.dto";

export class UpdateContractFieldsDto extends PartialType(
  CreateContractFieldsDto,
) {}
