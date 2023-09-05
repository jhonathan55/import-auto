import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModifyModuleService } from './services/modify-module.service';
import { AutoImportService } from './services/auto-import.service';
@Module({
  imports: [
    
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService, 
    ModifyModuleService, 
    AutoImportService
  ],
})
export class AppModule {}
