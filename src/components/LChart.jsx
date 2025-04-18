import React from "react";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  Tooltip,
} from "recharts";

const LChart = () => {
  const subjectMarksData = [
    { id: 1, name: "Alice", physics: 85, chemistry: 90, math: 78 },
    { id: 2, name: "Bob", physics: 78, chemistry: 85, math: 80 },
    { id: 3, name: "Charlie", physics: 92, chemistry: 88, math: 95 },
    { id: 4, name: "David", physics: 88, chemistry: 84, math: 90 },
    { id: 5, name: "Emma", physics: 70, chemistry: 75, math: 68 },
    { id: 6, name: "Frank", physics: 95, chemistry: 91, math: 97 },
    { id: 7, name: "Grace", physics: 82, chemistry: 78, math: 85 },
    { id: 8, name: "Hannah", physics: 79, chemistry: 83, math: 77 },
    { id: 9, name: "Ian", physics: 87, chemistry: 89, math: 84 },
    { id: 10, name: "Jack", physics: 90, chemistry: 88, math: 92 },
  ];

  return (
    <div>
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="10%"
        outerRadius="80%"
        data={subjectMarksData}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          minAngle={15}
          label={{ fill: "#666", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="math"
        />
       
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        <Tooltip />
      </RadialBarChart>
    </div>
  );
};

export default LChart;
