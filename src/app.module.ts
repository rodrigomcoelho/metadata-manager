import { Module } from "@nestjs/common";
import { BusinessUnitsModule } from "./modules/businessUnits/businessUnits.module";
import { GroupsModule } from "./modules/groups/groups.module";
import { ContractsModule } from "./modules/contracts/contracts.module";

@Module({
  imports: [BusinessUnitsModule, GroupsModule, ContractsModule],
})
export class AppModule {}
