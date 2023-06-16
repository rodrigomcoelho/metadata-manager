import { Module } from "@nestjs/common";
import { BusinessUnitsModule } from "./modules/businessUnits/businessUnits.module";

@Module({
  imports: [BusinessUnitsModule],
})
export class AppModule {}
