
import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

interface ResultsChartProps {
  results: {
    E: number;
    I: number;
    S: number;
    N: number;
    T: number;
    F: number;
    J: number;
    P: number;
  };
}

const ResultsChart = ({ results }: ResultsChartProps) => {
  const chartData = [
    {
      name: 'Extraversion vs Introversion',
      E: results.E,
      I: results.I,
    },
    {
      name: 'Sensing vs Intuition',
      S: results.S,
      N: results.N,
    },
    {
      name: 'Thinking vs Feeling',
      T: results.T,
      F: results.F,
    },
    {
      name: 'Judging vs Perceiving',
      J: results.J,
      P: results.P,
    },
  ];

  return (
    <div className="w-full h-64 md:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis dataKey="name" type="category" width={150} />
          <Tooltip 
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: 'none' }}
            formatter={(value, name) => [`${value}%`, name]}
          />
          <Bar dataKey="E" name="Extraversion" fill="#3A97D4" radius={[0, 4, 4, 0]} />
          <Bar dataKey="I" name="Introversion" fill="#9B87F5" radius={[0, 4, 4, 0]} />
          <Bar dataKey="S" name="Sensing" fill="#3A97D4" radius={[0, 4, 4, 0]} />
          <Bar dataKey="N" name="Intuition" fill="#9B87F5" radius={[0, 4, 4, 0]} />
          <Bar dataKey="T" name="Thinking" fill="#3A97D4" radius={[0, 4, 4, 0]} />
          <Bar dataKey="F" name="Feeling" fill="#9B87F5" radius={[0, 4, 4, 0]} />
          <Bar dataKey="J" name="Judging" fill="#3A97D4" radius={[0, 4, 4, 0]} />
          <Bar dataKey="P" name="Perceiving" fill="#9B87F5" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultsChart;
