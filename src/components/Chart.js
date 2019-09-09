import React from 'react';
import { withRouter } from 'react-router-dom';
import { BarChart, Legend, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import TimerContainer from './TimerContainer';
import NavTabs from './Tabs';

const data = [
  {
    name: '0',
    uv: 800,
  },
  {
    name: '1',
    uv: 4000,
  },
  {
    name: '2',
    uv: 3000,
  },
  {
    name: '3',
    uv: 2000,
  },
  {
    name: '4',
    uv: 2780,
  },
  {
    name: '5',
    uv: 1890,
  },
  {
    name: '6',
    uv: 2390,
  },
  {
    name: '7',
    uv: 3490,
  },
  {
    name: '8',
    uv: 4000,
  },
  {
    name: '9',
    uv: 4000,
  },
  {
    name: '10',
    uv: 4000,
  },
  {
    name: '11',
    uv: 4000,
  },
  {
    name: '12',
    uv: 1950,
  },
  {
    name: '13',
    uv: 2500,
  },
  {
    name: '14',
    uv: 2390,
  },
  {
    name: '15',
    uv: 3490,
  },
  {
    name: '16',
    uv: 4000,
  },
  {
    name: '17',
    uv: 4000,
  },
  {
    name: '18',
    uv: 4000,
  },
  {
    name: '19',
    uv: 4000,
  },
  {
    name: '20',
    uv: 1950,
  },
  {
    name: '21',
    uv: 2500,
  },
  {
    name: '22',
    uv: 4000,
  },
  {
    name: '23',
    uv: 4000,
  },
];

function Chart(props) {
  const info = props.DataTasks.map((task, index) => {
    const timeStart = new Date(task.time_start);
    const timeEnd = new Date(task.time_end);
    const time = { index, timeStart, timeEnd };
    return time;
  });
  const data123 = info.map(item => {
    for (let i = 0; i < 24; i++) {
      if (item.timeStart.getHours() === i) {
        let minutesInHour;
        const hourStart = item.timeStart.getHours();
        const hourEnd = item.timeEnd.getHours();
        const minutesStart = item.timeStart.getMinutes();
        const minutesEnd = item.timeEnd.getMinutes();
        const minutes = Math.floor((item.timeEnd.getTime() - item.timeStart.getTime()) / 60000);
        if (minutes > 60) {
          minutesInHour = 60 - minutesStart;
        }
        return { i, minutes, minutesStart, minutesEnd, hourStart, hourEnd, minutesInHour };
      }
    }
  });
  console.log(data123);

  return (
    <div>
      <TimerContainer />
      <div style={{ width: '1100px', marginLeft: 'auto', marginRight: 'auto', marginTop: '2%' }}>
        <NavTabs />
        <BarChart width={1100} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
}

export default withRouter(Chart);
