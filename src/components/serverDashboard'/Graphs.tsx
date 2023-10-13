import React, { useEffect, useState } from "react";
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
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface User {
  name: string;
  value: number;
  color: string;
}

const Graphs: React.FC = () => {
  const [user, setUser] = useState<User[]>([]);
  const [dataMY, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://52.118.148.183/stats/users");
        const response2 = await axios.get(
          "http://52.118.148.183/stats/revenue"
        );

        // Adding color property to each user object
        const usersWithColor = response?.data.map((user: any) => ({
          name: user.name,
          value: user.value,
          color: user.name === "IBM" ? "#1E80B4" : "#81388C",
        }));
        setUser(usersWithColor);

        const chartData = {
          labels: response2?.data.labels,
          datasets: [
            {
              label: response2?.data.datasets[0].label,
              data: response2?.data.datasets[0].data,
              borderColor: "#1E80B4",
              backgroundColor: "#1E80B4",
              tension: 0.5,
            },
          ],
        };
        setData(chartData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false); // Set loading state to false after fetching data
      }
    };

    fetchData();
  }, []);

  const RADIAN: number = Math.PI / 180;

  // interface Data {
  //   name: string;
  //   value: number;
  //   color: string;
  // }

  // const data: Data[] = [
  //   { name: "A", value: 70, color: "#1E80B4" },
  //   { name: "B", value: 30, color: "#81388C" },
  // ];

  const data1 = {
    labels: ["May 12", "May 14", "May 15", "May 16"],
    datasets: [
      {
        label: "Dataset 1",
        data: [8, 7.8, 3, 7],
        borderColor: "#1E80B4",
        backgroundColor: "#1E80B4",
        tension: 0.5,
      },
    ],
  };
  console.log(dataMY);
  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      scales: {
        grid: {
          display: false,
        },
      },
      title: {
        display: true,
        text: "Revenue",
      },
    },
  };
  const cx: number = 150;
  const cy: number = 200;
  const iR: number = 50;
  const oR: number = 100;
  const value: number = user[0]?.value;

  const needle = (
    value: number,
    data: User[],
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

  if (isLoading) {
    return <div>Loading...</div>; // Render loading indicator while data is being fetched
  }

  return (
    <div className="graphs w-full p-5">
      <h2 className="text-2xl font-medium">Our IBM Platform Users</h2>
      <div className=" flex justify-between items-center w-full">
        <div style={{ width: "300px" }}>
          <h2 className="text-2xl font-light">960 Total User</h2>

          <PieChart width={300} height={250}>
            <Pie
              dataKey="value"
              data={user}
              cx={cx}
              cy={cy}
              innerRadius={iR}
              outerRadius={oR}
              fill="#8884d8"
              stroke="none"
            >
              {user.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            {needle(value, user, cx, cy, iR, oR, "#A2A5AC")}
          </PieChart>

          <div className="flex justify-between items-center py-5 w-full">
            {user.map((entry, index) => (
              <div
                key={`label-${index}`}
                className="text-2xl flex flex-col gap-5 ml-[18%]  font-light"
              >
                <p className="font-medium">{entry.value}%</p>
                <div className="circle-container flex items-center gap-2 justify-center ">
                  <div
                    className="circle"
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor:
                      entry.name === "IBM" ? "#1E80B4" : "#81388C",
                    }}
                    />
                    <span>{entry.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ width: "600px", height: "300px" }}>
          <Line data={dataMY} options={options}></Line>
        </div>
      </div>
    </div>
  );
};

export default Graphs;
 


