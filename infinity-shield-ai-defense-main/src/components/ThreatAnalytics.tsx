
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Shield, TrendingUp, AlertTriangle, Brain } from 'lucide-react';

const threatTypeData = [
  { name: 'SQL Injection', value: 35, color: '#EF4444' },
  { name: 'XSS', value: 28, color: '#F59E0B' },
  { name: 'CSRF', value: 15, color: '#8B5CF6' },
  { name: 'AI-Detected', value: 22, color: '#06B6D4' },
];

const weeklyData = [
  { day: 'Mon', attacks: 45, blocked: 43 },
  { day: 'Tue', attacks: 52, blocked: 51 },
  { day: 'Wed', attacks: 38, blocked: 38 },
  { day: 'Thu', attacks: 67, blocked: 65 },
  { day: 'Fri', attacks: 71, blocked: 69 },
  { day: 'Sat', attacks: 23, blocked: 23 },
  { day: 'Sun', attacks: 31, blocked: 31 },
];

export const ThreatAnalytics = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Threat Analytics</h1>
        <p className="text-gray-400">Advanced AI-powered threat analysis and detection patterns</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">AI Detection Rate</p>
                <p className="text-2xl font-bold mt-1">94.7%</p>
                <p className="text-green-400 text-sm mt-1">+2.1% this week</p>
              </div>
              <Brain className="h-8 w-8 text-cyan-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Zero-day Detections</p>
                <p className="text-2xl font-bold mt-1">12</p>
                <p className="text-yellow-400 text-sm mt-1">3 this week</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">False Positives</p>
                <p className="text-2xl font-bold mt-1">0.3%</p>
                <p className="text-green-400 text-sm mt-1">-0.1% improvement</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Block Efficiency</p>
                <p className="text-2xl font-bold mt-1">99.2%</p>
                <p className="text-green-400 text-sm mt-1">Excellent</p>
              </div>
              <Shield className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>Threat Type Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={threatTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {threatTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {threatTypeData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-gray-300">{item.name}</span>
                  <Badge variant="outline" className="text-xs">{item.value}%</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>Weekly Attack Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="day" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="attacks" fill="#EF4444" name="Attacks Detected" />
                  <Bar dataKey="blocked" fill="#10B981" name="Attacks Blocked" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-cyan-400" />
            <span>AI Model Performance</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.2%</div>
              <div className="text-sm text-gray-400">Detection Accuracy</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '99.2%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">0.8ms</div>
              <div className="text-sm text-gray-400">Analysis Time</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div className="bg-green-400 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">156</div>
              <div className="text-sm text-gray-400">Active Rules</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div className="bg-purple-400 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
