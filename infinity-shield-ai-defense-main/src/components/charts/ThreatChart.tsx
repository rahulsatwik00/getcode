
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', threats: 12, blocked: 12 },
  { time: '04:00', threats: 8, blocked: 8 },
  { time: '08:00', threats: 24, blocked: 23 },
  { time: '12:00', threats: 45, blocked: 44 },
  { time: '16:00', threats: 67, blocked: 65 },
  { time: '20:00', threats: 34, blocked: 34 },
  { time: '24:00', threats: 18, blocked: 18 },
];

export const ThreatChart = () => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
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
          <Line 
            type="monotone" 
            dataKey="threats" 
            stroke="#EF4444" 
            strokeWidth={2}
            name="Threats Detected"
          />
          <Line 
            type="monotone" 
            dataKey="blocked" 
            stroke="#10B981" 
            strokeWidth={2}
            name="Threats Blocked"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
