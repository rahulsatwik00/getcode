
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', responseTime: 0.5 },
  { time: '04:00', responseTime: 0.3 },
  { time: '08:00', responseTime: 0.8 },
  { time: '12:00', responseTime: 1.2 },
  { time: '16:00', responseTime: 0.9 },
  { time: '20:00', responseTime: 0.6 },
  { time: '24:00', responseTime: 0.4 },
];

export const ResponseTimeChart = () => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="time" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              border: '1px solid #374151',
              borderRadius: '8px'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="responseTime" 
            stroke="#06B6D4" 
            fill="#06B6D4"
            fillOpacity={0.3}
            name="Response Time (ms)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
