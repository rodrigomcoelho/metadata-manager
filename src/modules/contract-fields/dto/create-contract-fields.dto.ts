import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateContractFieldsDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  contractId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  fieldName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  fieldType: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  fieldMode: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  fieldDescription: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  fieldParentId?: string;
}
