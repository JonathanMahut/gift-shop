import { MbscModule } from "@mobiscroll/angular-lite";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FolderPageRoutingModule } from "./products-routing.module";

import { FolderPage } from "./products.page";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxIonicImageViewerModule,
    FolderPageRoutingModule,
  ],
  declarations: [FolderPage],
})
export class FolderPageModule {}
