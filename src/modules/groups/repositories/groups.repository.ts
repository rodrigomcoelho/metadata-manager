import { CreateGroupDto } from "../dto/create-groups.dto";
import { UpdateGroupDto } from "../dto/update-groups.dto";
import { GroupEntity } from "../entities/group.entity";

export abstract class GroupsRepository {
  abstract create(createGroupDto: CreateGroupDto): Promise<GroupEntity>;

  abstract update(
    id: string,
    updateGroupDto: UpdateGroupDto,
  ): Promise<GroupEntity>;

  abstract getAll(): Promise<GroupEntity[]>;

  abstract getOne(id: string): Promise<GroupEntity>;

  abstract delete(id: string): Promise<GroupEntity>;
}
