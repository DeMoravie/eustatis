import { useRef } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import './css/negativeBarChart.css'

const NegativeBarChart = (props: HighchartsReact.Props) => {
  const options = { 
    chart: {
			type: 'bar'
	},
	legend: {
			enabled: false
	},
	title: {
			text: ''
	},
	xAxis: {
		categories: Array(),
	},
	yAxis: {		
		title: {
			text: 'in Prozent %',
			align: 'high'
		},
	},
	tooltip: {
		pointFormatter: function(){
			var point: any = this;
			var amount = (point.y).toLocaleString('de-DE');

			return `<b>${amount} Prozent</b>`
		}
	},
	credits: {
			enabled: false
	},
	series: [{
			name: '',
			data: Array()
	}]}

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
	props.data.forEach(fillSeries);
	function fillSeries(item: any) {
		options.xAxis.categories.push(item.name)		
		options.series[0].data.push(item.increasePercent)
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

export default NegativeBarChart;