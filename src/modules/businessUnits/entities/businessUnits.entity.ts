import { ApiProperty } from "@nestjs/swagger";

export class BusinessUnitEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdAt: Date;
}
