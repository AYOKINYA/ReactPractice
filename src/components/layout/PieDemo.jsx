import React, { useState, useCallback } from "react";
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from 'recharts';

const data1 = [
  { name: 'CPU', value: 30 },
  { name: 'Group B', value: 70 },
];

const data2 = [
  { name: 'MEMORY', value: 10 },
  { name: 'Group B', value: 90 },
];

const data3 = [
  { name: 'BATTERY', value: 60 },
  { name: 'Group B', value: 40 },
];

const data4 = [
  { name: 'PING', value: 15 },
  { name: 'Group B', value: 85 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    name,
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx + 75} y={cy} dy={8} textAnchor="middle" fill={'white'}>
        {name}
      </text>
      <text x={cx + 150} y={cy} dy={8} textAnchor="middle" fill={'white'}>
        {Math.ceil(percent * 100)}%
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieDemo = () => {
  
  const [activeIndex, setActiveIndex] = useState(0);
  // const onPieEnter = useCallback(
  //   (_, index) => {
  //     setActiveIndex(index);
  //   },
  //   [setActiveIndex]
  // );

  return (
    <ResponsiveContainer width="99%" height="99%">
      <PieChart>
        <Pie
          data={data1}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          cx={'25%'}
          cy={'50%'}
          startAngle={0}
          endAngle={360}
          innerRadius={15}
          outerRadius={20}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data1.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data2}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          cx={'40%'}
          cy={'50%'}
          startAngle={0}
          endAngle={360}
          innerRadius={15}
          outerRadius={20}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data2.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data3}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          cx={'55%'}
          cy={'50%'}
          startAngle={0}
          endAngle={360}
          innerRadius={15}
          outerRadius={20}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data3.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data4}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          cx={'70%'}
          cy={'50%'}
          startAngle={0}
          endAngle={360}
          innerRadius={15}
          outerRadius={20}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data4.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

      </PieChart>
      </ResponsiveContainer>
  )
}

export default PieDemo;