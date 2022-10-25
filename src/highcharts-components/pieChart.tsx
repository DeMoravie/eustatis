import { useRef } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import './css/pieChart.css'

const PieChart = (props: HighchartsReact.Props) => {
  const options = {
    chart: {
      plotShadow: false,
      type: 'pie'
    },
    tooltip: {
      pointFormatter: function(){
        var point: any = this;
        var percentage = point.percentage.toFixed(2);
        var amount = (point.y/1000).toLocaleString('de-DE');

        return `<b>${percentage}% / ${amount} Millionen</b>`
      }
    },
    accessibility: {
      point: {
          valueSuffix: '%'
      }
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: Array(),
    title: {}
  };

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  options.series.push(props.data)
  options.title = {text: `${props.title}`}
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      containerProps={{ style: { height: "70vh", width: "40vw" } }}
      {...props}
    />
  );
};

export default PieChart;