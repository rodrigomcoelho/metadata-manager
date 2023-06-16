import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateGroupDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  description: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({ required: false })
  email?: string;

  @IsOptional()
  @ApiProperty({ required: false })
  slackId?: string;

  @IsOptional()
  @ApiProperty({ required: false, default: true })
  isActive?: boolean;
}
