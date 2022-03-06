import React, { useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import { ComponentProps } from '@incorta-org/component-sdk';

import { useFullViewport } from 'hooks';
import { BASE_CHART_OPTIONS } from 'constants/general';

const TIMESTAMP_INDEX = 0;
const CLOSE_INDEX = 1;
const OPEN_INDEX = 2;
const HIGH_INDEX = 3;
const LOW_INDEX = 4;

const CandlestickChart = (props: ComponentProps) => {
  const ref = useRef(null);
  const data = props.response.data;

  const {
    rect: { width, height }
  } = useFullViewport(ref);

  const dateData = data.map(cell => cell[TIMESTAMP_INDEX]?.formatted);

  const seriesData = data.map(cell => [
    Number(cell[CLOSE_INDEX]?.value),
    Number(cell[OPEN_INDEX]?.value),
    Number(cell[LOW_INDEX]?.value),
    Number(cell[HIGH_INDEX]?.value)
  ]);

  const options = {
    ...BASE_CHART_OPTIONS,
    xAxis: {
      data: dateData
    },
    yAxis: {},
    series: [
      {
        type: 'candlestick',
        data: seriesData
      }
    ]
  };

  return (
    <div ref={ref}>
      <ReactECharts option={options} style={{ width, height }} />
    </div>
  );
};

export default CandlestickChart;
