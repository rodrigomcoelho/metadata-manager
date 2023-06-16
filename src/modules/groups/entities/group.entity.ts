import { ApiProperty } from "@nestjs/swagger";

export class GroupEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  email?: string;

  @ApiProperty()
  slackId: string;

  @ApiProperty()
  isActive: boolean;
}
