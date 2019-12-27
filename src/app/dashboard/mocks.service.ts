import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ToolPaletteItem, Dashboard } from './dashboard.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MocksService {
private readonly DASHBOARDS = 'assets/data/dashboards.json';
  private readonly TOOL_PALETTE_ITEMS = 'assets/data/tool-palette-items.json';

  constructor(protected httpClient: HttpClient) {}

  public getDashboards(): Observable<Dashboard[]> {
    return this.httpClient.get<Dashboard[]>(this.DASHBOARDS);
  }

  public getDashboard(dashboardId: string): Observable<Dashboard>  {

    return this.httpClient.get<Dashboard[]>(this.DASHBOARDS).pipe(
      map((dashboards: Dashboard[]) =>
        dashboards.find(dashboard => dashboard.id === dashboardId)));
  }

  public getToolPaletteItems(): Observable<ToolPaletteItem[]> {
    return this.httpClient.get<ToolPaletteItem[]>(this.TOOL_PALETTE_ITEMS);
  }

  public getToolPaletteItem(widgetId: string): Observable<ToolPaletteItem>  {

    return this.httpClient.get<ToolPaletteItem[]>(this.TOOL_PALETTE_ITEMS).pipe(
      map((toolPaletteItems: ToolPaletteItem[]) =>
        toolPaletteItems.find(toolPaletteItem => toolPaletteItem.id === widgetId)));
  }

}