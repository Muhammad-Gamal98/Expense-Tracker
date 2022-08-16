import './chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
  const dataPointValue = props.dataPoints.map(dataPoint => (dataPoint.value));
  const maxVal = Math.max(...dataPointValue)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.month}
          value={dataPoint.value}
          month={dataPoint.month}
          maxValue={maxVal}
        />
      ))}
    </div>
  );
}
export default Chart