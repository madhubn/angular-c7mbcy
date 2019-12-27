import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";

import {
  DashboardWidget,
  ToolPaletteItem,
  DisplayGrid,
  GridType,
  DashboardItemComponentInterface,
  DashboardConfig
} from "./dashboard.model";

import { MocksService } from "./mocks.service";
import { LineComponent } from "./../line/line.component";
import { Subscription } from "rxjs";

import * as screenfull from "screenfull";
import { Screenfull } from "screenfull";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  public options: DashboardConfig;
  public items: DashboardWidget[];

  public screenFull = <Screenfull>screenfull;

  public toolPaletteItems: ToolPaletteItem[];

  protected subscription: Subscription;

  private canDrop = true;

  public components = {
    LineComponent: LineComponent
  };

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private dashboardService: MocksService
  ) {
    this.getOptions();
  }

  ngOnInit() {
    this.subscribe();
  }

  protected subscribe() {
    this.subscription = this.dashboardService
      .getDashboard("1")
      .subscribe(data => {
        this.items = data.widgets;

        // this.logger.info('Dashboard Id: ' + JSON.stringify(data.id));
        // this.logger.info('Widgets: ' + JSON.stringify(this.items));
      });
  }

  getOptions() {
    this.options = {
      disablePushOnDrag: false,
      displayGrid: DisplayGrid.Always,
      draggable: {
        enabled: true,
        ignoreContent: false,
        // dropOverItems: true,
        ignoreContentClass: "gridster-item-content",
        dropOverItems: false,
        dragHandleClass: "drag-handler"
        // ignoreContentClass: 'no-drag',
      },
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      emptyCellDropCallback: this.onDrop.bind(this),
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      gridType: GridType.Fit,
      itemResizeCallback: this.itemResize.bind(this),
      // maxCols: 6,
      // maxRows: 6,
      minCols: 10, // 6
      minRows: 10, // 6
      pushDirections: { north: true, east: true, south: true, west: true },
      pushItems: true,
      resizable: { enabled: true }
      // swap: true,
    };
  }

  public itemResize(
    item: DashboardWidget,
    itemComponent: DashboardItemComponentInterface
  ): void {
    console.log("itemResize", item);
    console.log("itemResize", itemComponent);
    // this.dashboardWidgetService.reflowWidgets();
  }

  public onDrop(event) {
    //
    // emptyCellDropCallback is called twice
    // See: https://github.com/tiberiuzuld/angular-gridster2/issues/513
    //
    console.log("onDrop", event);

    // if (this.canDrop) {

    //   this.canDrop = false;

    //   const widgetId = event.dataTransfer.getData('widgetIdentifier');

    //   const toolPaletteItem = this.getToolPaletteItem(widgetId);

    //   const widget = { cols: 4, rows: 4, y: 0, x: 0, ...toolPaletteItem };

    //   this.items.push(widget);

    //   setTimeout(() => {
    //     this.canDrop = true;
    //   }, 1000);

    // }

    // this.logger.info('Widget Id: ' + widgetId);
    // this.logger.info('toolPaletteItem: ' + JSON.stringify(toolPaletteItem));
    // this.logger.info('widget: ' + JSON.stringify(widget));
  }
}
