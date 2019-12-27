import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-line",
  templateUrl: "./line.component.html",
  styleUrls: ["./line.component.css"]
})
export class LineComponent implements OnInit {
  @Input()
  item: any;
  isLoading: boolean = true;
  echartsInstance: any;
  updateOptions: any;
  options: any;

  constructor() {}

  ngOnInit() {
    console.log("changes", this.item);
    this.options = {
      grid: {
        left: "10%",
        containLabel: true
      },
      xAxis: {
        type: "time",
        splitLine: {
          show: true
        },
        nameLocation: "middle",
        name: "Time",
        nameGap: 25
      },
      yAxis: {
        type: "value",
        name: "Temperture",
        nameLocation: "middle",
        nameGap: 40
      },
      dataZoom: {
        show: true
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: this.item.type
        }
      ]
    };
  }

  onChartInit(e: any) {
    this.echartsInstance = e;
    console.log("on chart init:", e);
    this.echartsInstance.resize();
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("changes", changes["result1"].currentValue);
  //   this.isLoading = true;
  //   const data = changes["result1"].currentValue;
  //    console.log("SimpleChanges changes", data.config.yAxis === "'Single'");
  //   const series =
  //     data.config.yAxis === "Single"
  //       ? this.yAxisOptionKPI(data.config.sColor)
  //       : this.yAxisOptionKPIDual(data.config.sColor);
  //   this.options = this.chart.getLineWidgetOptions(series, data.config);
  // }
}
