import { ApiProperty } from "@nestjs/swagger";

export class ContractFieldsEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  contractId: string;

  @ApiProperty()
  fieldName: string;

  @ApiProperty()
  fieldType: string;

  @ApiProperty()
  fieldMode: string;

  @ApiProperty()
  fieldDescription: string;

  @ApiProperty()
  fieldParentId?: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
