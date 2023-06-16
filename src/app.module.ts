import { Module } from "@nestjs/common";
import { BusinessUnitsModule } from "./modules/businessUnits/businessUnits.module";
import { GroupsModule } from "./modules/groups/groups.module";

@Module({
  imports: [BusinessUnitsModule, GroupsModule],
})
export class AppModule {}
