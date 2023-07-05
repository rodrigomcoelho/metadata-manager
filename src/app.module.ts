import { Module } from "@nestjs/common";
import { BusinessUnitsModule } from "./modules/businessUnits/businessUnits.module";
import { GroupsModule } from "./modules/groups/groups.module";
import { ContractsModule } from "./modules/contracts/contracts.module";
import { ContractFieldsModule } from "./modules/contract-fields/contract-fields.module";

@Module({
  imports: [
    BusinessUnitsModule,
    GroupsModule,
    ContractsModule,
    ContractFieldsModule,
  ],
})
export class AppModule {}
