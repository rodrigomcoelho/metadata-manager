import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { GroupEntity } from "./entities/group.entity";
import { GroupsRepository } from "./repositories/groups.repository";
import { CreateGroupDto } from "./dto/create-groups.dto";
import { UpdateGroupDto } from "./dto/update-groups.dto";

@ApiTags("Groups")
@Controller("groups")
export class GroupController {
  constructor(private readonly groupRepository: GroupsRepository) {}
  @Post()
  @ApiCreatedResponse({ type: GroupEntity })
  async create(@Body() createGroupDto: CreateGroupDto): Promise<GroupEntity> {
    return await this.groupRepository.create(createGroupDto);
  }

  @Patch(":id")
  @ApiCreatedResponse({ type: GroupEntity })
  async update(
    @Param("id") id: string,
    @Body() updateGroupDto: UpdateGroupDto,
  ): Promise<GroupEntity> {
    const group = await this.groupRepository.update(id, updateGroupDto);

    if (!group) {
      throw new NotFoundException(`Group ${id} not found.`);
    }

    return group;
  }

  @Get(":id")
  @ApiOkResponse({ type: GroupEntity })
  async getOne(@Param("id") id: string): Promise<GroupEntity> {
    const group = await this.groupRepository.getOne(id);

    if (!group) {
      throw new NotFoundException(`Group ${id} not found.`);
    }

    return group;
  }

  @Get()
  @ApiOkResponse({ type: GroupEntity, isArray: true })
  async getAll(): Promise<GroupEntity[]> {
    return await this.groupRepository.getAll();
  }

  @Delete(":id")
  @ApiOkResponse({ type: GroupEntity })
  async delete(@Param("id") id: string): Promise<GroupEntity> {
    const group = await this.groupRepository.delete(id);

    if (!group) {
      throw new NotFoundException(`Group ${id} not found.`);
    }

    return group;
  }
}
