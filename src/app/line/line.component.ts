import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-line",
  templateUrl: "./line.component.html",
  styleUrls: ["./line.component.css"]
})
export class LineComponent implements OnInit {
  isLoading: boolean = true;
  updateOptions: any;
  options = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line"
      }
    ]
  };

  constructor() {}

  ngOnInit() {
    console.log("changes");
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
