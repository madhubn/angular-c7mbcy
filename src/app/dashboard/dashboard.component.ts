import { MocksService } from "./mocks.service";
import { LineComponent } from "./../line/line.component";
import { Subscription } from "rxjs";

import * as screenfull from "screenfull";
import { Screenfull } from "screenfull";
import { GaugeComponent } from "./../gauge/gauge.component";
import { DashboardWidget, ToolPaletteItem } from "./dashboard.model";

import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation
} from "@angular/core";

import {
  CompactType,
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  GridType
} from "angular-gridster2";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  options: GridsterConfig;
  // dashboard: Array<GridsterItem>;
  public dashboard: DashboardWidget[];

  public screenFull = <Screenfull>screenfull;

  public toolPaletteItems: ToolPaletteItem[];

  public components = {
    LineComponent: LineComponent,
    GaugeComponent: GaugeComponent
  };

  protected subscription: Subscription;

  constructor(private dashboardService: MocksService) {}

  ngOnInit() {
    this.options = {

      disablePushOnDrag: true,
      displayGrid: DisplayGrid.Always,
      draggable: {
        enabled: true,
        ignoreContent: true,
        // dropOverItems: true,
        dropOverItems: false,
        dragHandleClass: 'drag-handler',
        ignoreContentClass: 'no-drag',
      },
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      // emptyCellDropCallback: this.onDrop.bind(this),
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: true,
      enableEmptyCellDrag: false,
      gridType: GridType.Fit,
      // itemResizeCallback: this.itemResize.bind(this),
      // maxCols: 6,
      // maxRows: 6,
      minCols: 10, // 6
      minRows: 10,  // 6
      pushDirections: { north: true, east: true, south: true, west: true },
      pushItems: true,
      resizable: { enabled: true },
      swap: true,
    };
      // gridType: GridType.Fit,
      // compactType: "compactUp&Left",
      // margin: 10,
      // outerMargin: true,
      // outerMarginTop: null,
      // outerMarginRight: null,
      // outerMarginBottom: null,
      // outerMarginLeft: null,
      // useTransformPositioning: true,
      // mobileBreakpoint: 640,
      // minCols: 1,
      // maxCols: 100,
      // minRows: 1,
      // maxRows: 100,
      // maxItemCols: 100,
      // minItemCols: 1,
      // maxItemRows: 100,
      // minItemRows: 1,
      // maxItemArea: 2500,
      // minItemArea: 1,
      // defaultItemCols: 1,
      // defaultItemRows: 1,
      // fixedColWidth: 105,
      // fixedRowHeight: 105,
      // keepFixedHeightInMobile: false,
      // keepFixedWidthInMobile: false,
      // scrollSensitivity: 10,
      // scrollSpeed: 20,
      // enableEmptyCellClick: false,
      // enableEmptyCellContextMenu: false,
      // enableEmptyCellDrop: false,
      // enableEmptyCellDrag: false,
      // enableOccupiedCellDrop: false,
      // emptyCellDragMaxCols: 50,
      // emptyCellDragMaxRows: 50,
      // ignoreMarginInRow: false,
      // draggable: {
      //   enabled: true
      // },
      // resizable: {
      //   enabled: false
      // },
      // swap: false,
      // pushItems: true,
      // disablePushOnDrag: false,
      // disablePushOnResize: false,
      // pushDirections: { north: true, east: true, south: true, west: true },
      // pushResizeItems: false,
      // // displayGrid: DisplayGrid.Drag,
      // disableWindowResize: false,
      // disableWarnings: false,
      // scrollToNewItems: false
    
    this.getToolPaletteItems();
    this.subscribe();
  }

  protected subscribe() {
    this.subscription = this.dashboardService
      .getDashboard("1")
      .subscribe(data => {
        this.dashboard = data.widgets;

        // this.logger.info('Dashboard Id: ' + JSON.stringify(data.id));
        // this.logger.info('Widgets: ' + JSON.stringify(this.items));
      });
  }

  public getToolPaletteItems() {
    const subscription: Subscription = this.dashboardService
      .getToolPaletteItems()
      .subscribe(data => {
        this.toolPaletteItems = data;

        subscription.unsubscribe();
      });
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }
  onAdd() {
    const data = {
      id: "10",
      name: "Gauge",
      component: "GaugeComponent",
      cols: 4,
      rows: 3,
      y: 0,
      x: 4,
      type: "line",
      config: {
        bgcolor: "#eee",
        dialStartAngle: -90,
        dialEndAngle: -90.001
      }
    };
    this.dashboard.push(data);
  }

  onGauge() {
    const data = {
      id: "10",
      name: "Gauge",
      component: "GaugeComponent",
      cols: 2,
      rows: 2,
      y: 0,
      x: 0,
      type: "line",
      config: {
        bgcolor: "#eee",
        dialStartAngle: 180,
        dialEndAngle: 0
      }
    };
    this.dashboard.push(data);
  }
}
