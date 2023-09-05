import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModifyModuleService } from './services/modify-module.service';
import { AutoImportService } from './services/auto-import.service';
import { NombreDelModuloModule } from './nombre-del-modulo/nombre-del-modulo.module';
import { VanessitaTeQuieroModule } from './vanessita-te-quiero/vanessita-te-quiero.module';
@Module({
  imports: [
    NombreDelModuloModule,
    VanessitaTeQuieroModule
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
export class AppModule { }
