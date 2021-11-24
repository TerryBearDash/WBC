import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  GridModule,
  PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LeftSideNavComponent } from './components/left-side-nav/left-side-nav.component';
import { RightSideNavComponent } from './components/right-side-nav/right-side-nav.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ErrorComponent } from './components/error/error.component';
import { DashHeaderComponent } from './components/dash-header/dash-header.component';
import { ChartsModule } from "@progress/kendo-angular-charts";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { ButtonsModule } from "@progress/kendo-angular-buttons";

import "hammerjs";

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LeftSideNavComponent,
    RightSideNavComponent,
    DataGridComponent,
    OverviewComponent,
    ErrorComponent,
    DashHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GridModule,
    ChartsModule,
    InputsModule,
    PDFModule,
    ExcelModule,
    ButtonsModule,
    DropDownsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
