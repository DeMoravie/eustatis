import { useRef } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import './css/barChart.css'

const BarChart = (props: HighchartsReact.Props) => {
  const options = { 
    chart: {
			type: 'bar'
    },
    xAxis: {
			categories: Array(),
			title: {
					text: null
			}
    },
    yAxis: {
			min: 0,
			title: {
				text: 'Bevölkerung (in Tausend)',
				align: 'high'
			},
			labels: {
				overflow: 'justify'
			}
    },
    tooltip: {
			pointFormatter: function(){
        var point: any = this;
        var amount = (point.y/1000).toLocaleString('de-DE');

        return `<b>${amount} Millionen</b>`
      }
    },
    plotOptions: {
			bar: {
				dataLabels: {
					enabled: true
				}
			}
    },
		title: "",
    legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			x: -40,
			y: 80,
			floating: true,
			borderWidth: 1,
			shadow: true
    },
    credits: {
			enabled: false
    },
    series: [{
			name: 'Jahr 2020',
			data: Array()
    },
		{
			name: 'Jahr 2010',
			data: Array()
    }]
  };

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
	props.data.forEach(fillSeries);
	function fillSeries(item: any) {
		options.xAxis.categories.push(item.name)		
		options.series[0].data.push(item.twentytwenty)
		options.series[1].data.push(item.twentyten)
	}

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      containerProps={{ className: "w-screen lg:w-70vw h-128 lg:h-192" }}
      {...props}
    />
  );
}

export default BarChart;