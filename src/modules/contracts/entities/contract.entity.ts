import { ApiProperty } from "@nestjs/swagger";

export class ContractEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  externalId: string;

  @ApiProperty()
  dataOwner: string;

  @ApiProperty()
  dataOwnerEmail: string;

  @ApiProperty()
  dataCustodianEmail: string;

  @ApiProperty()
  ingestionMethod: string;

  @ApiProperty()
  cronScheduler: string;

  @ApiProperty()
  tags: string;

  @ApiProperty()
  sourceFormat: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
