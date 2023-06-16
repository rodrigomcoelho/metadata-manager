import { PartialType } from "@nestjs/mapped-types";
import { CreateContractsDto } from "./create-contracts.dto";

export class UpdateContractsDto extends PartialType(CreateContractsDto) {}
