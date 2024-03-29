import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AgmCoreModule } from "@agm/core";
import { IonicModule } from "@ionic/angular";

import { GoogleMapsPage } from "./google-maps.page";

const routes: Routes = [
  {
    path: "",
    component: GoogleMapsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({ apiKey: "mapsKey" })
  ],
  declarations: [GoogleMapsPage]
})
export class GoogleMapsPageModule {}
