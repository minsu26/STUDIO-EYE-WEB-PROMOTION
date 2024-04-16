import React from 'react';
import dayjs from 'dayjs';
import Graph from './Graph';
import { fetchViewsData } from '@/apis/PromotionAdmin/dashboard';
import useGraphData from '@/hooks/useGraphData';

const StatisticsGraph = () => {
  const { startDate, endDate, data, processedData, loading, handleStartDateChange, handleEndDateChange } = useGraphData(
    fetchViewsData,
    dayjs().subtract(5, 'month'),
    dayjs().startOf('month'),
  );

  return (
    <Graph
      title='기간별 조회 수'
      processedData={processedData}
      loading={loading}
      data={data}
      handleStartDateChange={handleStartDateChange}
      handleEndDateChange={handleEndDateChange}
      startDate={startDate}
      endDate={endDate}
      division='view'
    />
  );
};

export default StatisticsGraph;
