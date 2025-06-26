
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Zap, Activity, AlertTriangle } from 'lucide-react';
import { ThreatChart } from './charts/ThreatChart';
import { ResponseTimeChart } from './charts/ResponseTimeChart';
import { RecentThreats } from './RecentThreats';

export const Dashboard = () => {
  const stats = [
    {
      title: 'Threats Blocked',
      value: '1,247',
      change: '+12%',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-900/20',
      borderColor: 'border-red-600',
    },
    {
      title: 'Requests Analyzed',
      value: '89.2K',
      change: '+5%',
      icon: Activity,
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/20',
      borderColor: 'border-blue-600',
    },
    {
      title: 'Response Time',
      value: '0.8ms',
      change: '-2%',
      icon: Zap,
      color: 'text-green-400',
      bgColor: 'bg-green-900/20',
      borderColor: 'border-green-600',
    },
    {
      title: 'Active Rules',
      value: '156',
      change: '+3',
      icon: AlertTriangle,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-900/20',
      borderColor: 'border-yellow-600',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Security Dashboard</h1>
        <p className="text-gray-400">Real-time protection status and threat analysis</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.change} from last hour
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor} border ${stat.borderColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>Threat Detection Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <ThreatChart />
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>Response Time Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponseTimeChart />
          </CardContent>
        </Card>
      </div>

      <RecentThreats />
    </div>
  );
};
