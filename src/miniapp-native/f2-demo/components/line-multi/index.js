Component({
  didUpdate() {
    if (this.chart != null && this.chart != undefined) {
      renderRadar(this.chart, this.props);
    }
    const { className } = this.props;
    const state = {};
    if (className !== this.data.className) {
      state.className = className;
    }
    this.setData(state);
  },
  methods: {
    onInitChart(F2, config) {
      const { padding } = this.props;
      const chart = new F2.Chart({
        ...config,
        padding,
        autoFit: true,
      });

      this.chart = chart;
      renderChart(this.chart, this.props);

      // 注意：需要把chart return 出来
      return chart;
    }
  }
});

function renderChart(chart, props) {
  const {
    data = [],
    xAxisName/* 写个值试试看 */,
    yAxisName/* 数值 */,
  } = props;
  if (!chart) {
    return;
  }

  // // 确保`${yAxisName}`为数值
  // const list = data.map((v) => ({
  //   ...v,
  //   [yAxisName]: parseFloat(v[yAxisName]) || 0
  // }));

  chart.clear();

  chart.source(data, {
    year: {
      range: [0, 1]
    }
  });
  chart.tooltip({
    showCrosshairs: true,
    custom: true,
    onChange: function onChange(obj) {
      var legend = chart.get('legendController').legends.top[0];
      var tooltipItems = obj.items;
      var legendItems = legend.items;
      var map = {};
      legendItems.map(function (item) {
        map[item.name] = Object.assign({}, item);
      });
      tooltipItems.map(function (item) {
        var name = item.name;
        var value = item.value;
        if (map[name]) {
          map[name].value = value;
        }
      });
      legend.setItems(Object.values(map));
    },
    onHide: function onHide() {
      var legend = chart.get('legendController').legends.top[0];
      legend.setItems(chart.getLegendItems().country);
    }
  });

  chart.area({ startOnZero: false }).shape('smooth').position('year*value').color('country').adjust('stack');
  chart.line({ startOnZero: false }).shape('smooth').position('year*value').color('country').size(2).adjust('stack');
  chart.point().shape('smooth').position('year*value').color('country').adjust('stack');

  chart.render();
}
