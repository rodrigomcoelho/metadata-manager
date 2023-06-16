import { Module } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { GroupsRepository } from "./repositories/groups.repository";
import { PrismaGroupsRepository } from "./repositories/prisma/groups.repository";
import { GroupController } from "./groups.controller";

@Module({
  controllers: [GroupController],
  providers: [
    PrismaService,
    {
      provide: GroupsRepository,
      useClass: PrismaGroupsRepository,
    },
  ],
})
export class GroupsModule {}
