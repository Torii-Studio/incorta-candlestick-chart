import React, { useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import { ComponentProps } from '@incorta-org/component-sdk';

// import { useFullViewport } from 'hooks';
// import { BASE_CHART_OPTIONS } from 'constants/general';

// This is the order of the trays, see definition.json
const TIMESTAMP_INDEX = 0;
const CLOSE_INDEX = 1;
const OPEN_INDEX = 2;
const HIGH_INDEX = 3;
const LOW_INDEX = 4;

const CandlestickChart = (props: ComponentProps) => {
  const ref = useRef(null);
  const data = props.response.data;

  const { width, height } = props.context.component.dimensions;

  const dateData = data.map(cell => cell[TIMESTAMP_INDEX]?.formatted);

  // The eCharts candlestick chart expects the data in this order:
  // [open, close, lowest, highest]
  // https://echarts.apache.org/en/option.html#series-candlestick.data
  const seriesData = data.map(cell => [
    Number(cell[OPEN_INDEX]?.value),
    Number(cell[CLOSE_INDEX]?.value),
    Number(cell[LOW_INDEX]?.value),
    Number(cell[HIGH_INDEX]?.value)
  ]);

  const options = {
    xAxis: {
      data: dateData
    },
    yAxis: {
      scale: props.context.component.settings?.scale && true
    },
    series: [
      {
        type: 'candlestick',
        data: seriesData
      }
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      },
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      textStyle: {
        color: '#000'
      }
    },
    axisPointer: {
      link: [
        {
          xAxisIndex: 'all'
        }
      ],
      label: {
        backgroundColor: '#777'
      }
    },
    dataZoom: [
      {
        type: 'slider',
        xAxisIndex: [0, 1],
        filterMode: 'filter',
        start: 0,
        end: 100
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
