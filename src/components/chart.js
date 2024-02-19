import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Card from "./Card";

const Chart = (props) => {
  const { results } = props;

  return (
    <Card>
      <ResponsiveContainer>
        <BarChart width={500} height={300} data={results}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />

          <Tooltip />
          <Legend />
          <Bar
            dataKey="frequency"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
