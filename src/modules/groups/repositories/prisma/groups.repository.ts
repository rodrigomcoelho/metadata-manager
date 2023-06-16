import { PrismaService } from "src/database/prisma.service";
import { CreateGroupDto } from "../../dto/create-groups.dto";
import { UpdateGroupDto } from "../../dto/update-groups.dto";
import { GroupEntity } from "../../entities/group.entity";
import { GroupsRepository } from "../groups.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaGroupsRepository implements GroupsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGroupDto: CreateGroupDto): Promise<GroupEntity> {
    return await this.prisma.group.create({ data: createGroupDto });
  }

  async update(
    id: string,
    updateGroupDto: UpdateGroupDto,
  ): Promise<GroupEntity> {
    const foundGroup = await this.prisma.group.findUnique({ where: { id } });

    if (!foundGroup) return;

    const updatedGroup = await this.prisma.group.update({
      where: { id: foundGroup.id },
      data: updateGroupDto,
    });

    return updatedGroup;
  }

  async getAll(): Promise<GroupEntity[]> {
    return await this.prisma.group.findMany();
  }

  async getOne(id: string): Promise<GroupEntity> {
    return await this.prisma.group.findUnique({ where: { id } });
  }

  async delete(id: string): Promise<GroupEntity> {
    const foundGroup = await this.prisma.group.findUnique({ where: { id } });

    if (!foundGroup) return;

    return await this.prisma.group.delete({ where: { id } });
  }
}
