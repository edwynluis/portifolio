import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { ListDisplayComponent } from './list-display/list-display.component';
import { WhoiamComponent } from './whoiam/whoiam.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ItemDisplayComponent,
    ListDisplayComponent,
    WhoiamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
