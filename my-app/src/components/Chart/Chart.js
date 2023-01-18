import './Chart.css';
import { ChartBar } from './ChartBar';

export const Chart = (props) => {
	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
                    key={dataPoint.label}
					value={dataPoint.Point.value}
					maxValue={null}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};
