import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { IngestionMethod } from "../enum/ingestion-method.enum";

export class CreateContractsDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  externalId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  dataOwner: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  dataOwnerEmail: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  dataCustodianEmail: string;

  @IsNotEmpty()
  @IsEnum(IngestionMethod)
  @ApiProperty({ enum: IngestionMethod })
  ingestionMethod: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  cronScheduler: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  tags?: string;

  @IsString()
  @ApiProperty()
  sourceFormat: string;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  isActive?: boolean;
}
