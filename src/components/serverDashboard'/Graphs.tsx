import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const Graphs: React.FC = () => {
  const RADIAN: number = Math.PI / 180;

  interface Data {
    name: string;
    value: number;
    color: string;
  }

  const data: Data[] = [
    { name: "A", value: 70, color: "#1E80B4" },
    { name: "B", value: 30, color: "#81388C" },
  ];

  const data1 = {
    labels: ['May 12' , "May 14", "May 15", "May 16"],
    datasets:[{
        label:"Dataset 1",
        data: [8 , 7.8 ,3,7],
        borderColor: '#1E80B4',
        backgroundColor: '#1E80B4',
        tension: 0.5
    }]
  }

   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      scales:{

            grid:{
                display:false
            }
     
      },
      title: {
        display: true,
        text: 'Revenue',
      },
    },
  };
  const cx: number = 150;
  const cy: number = 200;
  const iR: number = 50;
  const oR: number = 100;
  const value: number = 50;

  const needle = (
    value: number,
    data: Data[],
    cx: number,
    cy: number,
    iR: number,
    oR: number,
    color: string
  ): JSX.Element[] => {
    let total: number = 0;
    data.forEach((v) => {
      total += v.value;
    });
    const ang: number = 180.0 * (1 - value / total);
    const length: number = (iR + 2 * oR) / 3;
    const sin: number = Math.sin(-RADIAN * ang);
    const cos: number = Math.cos(-RADIAN * ang);
    const r: number = 5;
    const x0: number = cx + 5;
    const y0: number = cy + 5;
    const xba: number = x0 + r * sin;
    const yba: number = y0 - r * cos;
    const xbb: number = x0 - r * sin;
    const ybb: number = y0 + r * cos;
    const xp: number = x0 + length * cos;
    const yp: number = y0 + length * sin;

    return [
      <circle key="circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
      <path
        key="path"
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        stroke="none"
        fill={color}
      />,
    ];
  };
  return (
    <div className="graphs w-full p-5">
      <h2 className="text-2xl font-medium">Our IBM Platform Users</h2>
       <div className=" flex justify-between items-center w-full">
       <div style={{width:'600px'}}>

         <PieChart width={500} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {needle(value, data, cx, cy, iR, oR, "#A2A5AC")}
        </PieChart>
       </div>
 
      <div style={{width: '600px' , height: '300px'}}>

      <Line data={data1} options={options} ></Line>

      </div>

       </div>

    </div>
  );
};

export default Graphs;
