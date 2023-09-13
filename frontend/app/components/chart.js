import Ember from 'ember';

var revenueChart1;
// chart options
var chart = {
  caption: '',
  yAxisName: 'Grades',
  numberPrefix: '',
  captionpadding: '30',
  yaxisname: 'Average grades',
  rotatevalues: '0',
  divlinecolor: '#CCCCCC',
  yaxisvaluespadding: '15',
  valuefontbold: '2',
  labelsepchar: ': ',
  labeldisplay: 'AUTO',
  numberscalevalue: '1000,1000,1000',
  numberscaleunit: 'K,M,B',
  animation: '0',
  palettecolors: 'e44a00',
  theme: 'fusion',
  valueBgAlpha: '0',
  usePlotGradientColor: '0',
};

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
  },
  didReceiveAttrs() {
    this._super(...arguments);
    // When the chart data changes, call the renderColumn action function
    if (this.data && this.data !== this.oldData) {
      this.send('renderColumn');
    }
  },
  actions: {
    // column chart
    renderColumn: function () {
      this.set('oldData', this.data);
      var chartData;
      // Decide which chart data and set data for chart
      if (this.dataId === 3) {
        chartData = [
          { label: 'Math', value: this.data.mathematics },
          { label: 'IT', value: this.data.computer_science },
          { label: 'Literature', value: this.data.literature },
        ];
      } else {
        chartData = this.data.reduce((acc, data) => {
          acc.push({
            label: data.year + '-' + data.quarter,
            value: data.average,
          });
          return acc;
        }, []);
      }
      chart.caption = this.name;
      FusionCharts.ready(function () {
        revenueChart1 = new FusionCharts({
          type: 'column2d',
          width: '800',
          height: '350',
          renderAt: 'chart-container',
          dataFormat: 'json',
          dataSource: { chart, data: chartData },
        }).render();
      });
    },
    // bar chart
    renderBar: function () {
      var chartData;
      console.log(this.dataId);
      if (this.dataId === 3) {
        chartData = [
          { label: 'Math', value: this.data.mathematics },
          { label: 'IT', value: this.data.computer_science },
          { label: 'Literature', value: this.data.literature },
        ];
      } else {
        chartData = this.data.reduce((acc, data) => {
          acc.push({
            label: data.year + '-' + data.quarter,
            value: data.average,
          });
          return acc;
        }, []);
      }
      FusionCharts.ready(function () {
        revenueChart1 = new FusionCharts({
          type: 'bar2d',
          width: '800',
          height: '350',
          renderAt: 'chart-container',
          dataFormat: 'json',
          dataSource: { chart, data: chartData },
        }).render();
      });
    },
    // line chart
    renderLine: function () {
      var chartData;
      console.log(this.dataId);
      if (this.dataId === 3) {
        chartData = [
          { label: 'Math', value: this.data.mathematics },
          { label: 'IT', value: this.data.computer_science },
          { label: 'Literature', value: this.data.literature },
        ];
      } else {
        chartData = this.data.reduce((acc, data) => {
          acc.push({
            label: data.year + '-' + data.quarter,
            value: data.average,
          });
          return acc;
        }, []);
      }
      FusionCharts.ready(function () {
        revenueChart1 = new FusionCharts({
          type: 'line',
          width: '800',
          height: '350',
          renderAt: 'chart-container',
          dataFormat: 'json',
          dataSource: { chart, data: chartData },
        }).render();
      });
    },
    // area chart
    renderArea: function () {
      var chartData;
      console.log(this.dataId);
      if (this.dataId === 3) {
        chartData = [
          { label: 'Math', value: this.data.mathematics },
          { label: 'IT', value: this.data.computer_science },
          { label: 'Literature', value: this.data.literature },
        ];
      } else {
        chartData = this.data.reduce((acc, data) => {
          acc.push({
            label: data.year + '-' + data.quarter,
            value: data.average,
          });
          return acc;
        }, []);
      }
      FusionCharts.ready(function () {
        revenueChart1 = new FusionCharts({
          type: 'area2d',
          width: '800',
          height: '350',
          renderAt: 'chart-container',
          dataFormat: 'json',
          dataSource: { chart, data: chartData },
        }).render();
      });
    },
  },
});
