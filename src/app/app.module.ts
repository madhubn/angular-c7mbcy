import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { A11yModule } from "@angular/cdk/a11y";
import { BidiModule } from "@angular/cdk/bidi";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ObserversModule } from "@angular/cdk/observers";
import { OverlayModule } from "@angular/cdk/overlay";
import { PlatformModule } from "@angular/cdk/platform";
import { PortalModule } from "@angular/cdk/portal";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkTableModule } from "@angular/cdk/table";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GridsterModule } from "angular-gridster2";
import { HttpClientModule } from "@angular/common/http";
import { GaugeModule } from "angular-gauge";
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from "@angular/material";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MocksService } from "./dashboard/mocks.service";
import { LineComponent } from "./line/line.component";
import { NgxEchartsModule } from "ngx-echarts";
import { FileUploadModule } from "ng2-file-upload";

const MODULES = [
  // Material
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  // Custom
  FormsModule,
  MatNativeDateModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  FlexLayoutModule,
  GridsterModule,
  HttpClientModule,
  GaugeModule.forRoot(),
  FileUploadModule
];

const CDK = [
  A11yModule,
  CdkTableModule,
  BidiModule,
  ObserversModule,
  OverlayModule,
  PlatformModule,
  PortalModule,
  DragDropModule,
  ScrollingModule
];
import { DynamicModule } from "ng-dynamic-component";
import { GaugeComponent } from "./gauge/gauge.component";
import { NumDirective } from "./num.directive";
import { PhoneDirective } from "./phone.directive";

const dashboardWidgets = [LineComponent, GaugeComponent];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MODULES,
    CDK,
    DynamicModule.withComponents(dashboardWidgets),
    NgxEchartsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DashboardComponent,
    LineComponent,
    GaugeComponent,
    NumDirective,
    PhoneDirective
  ],
  bootstrap: [AppComponent],
  providers: [MocksService],
  exports: [DashboardComponent],
  entryComponents: [dashboardWidgets]
})
export class AppModule {}
