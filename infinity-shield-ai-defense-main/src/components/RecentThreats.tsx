
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, Zap } from 'lucide-react';

const threats = [
  {
    id: 1,
    type: 'SQL Injection',
    source: '192.168.1.100',
    time: '2 minutes ago',
    severity: 'high',
    status: 'blocked',
    method: 'POST',
    endpoint: '/api/users'
  },
  {
    id: 2,
    type: 'XSS Attack',
    source: '10.0.0.15',
    time: '5 minutes ago',
    severity: 'medium',
    status: 'blocked',
    method: 'GET',
    endpoint: '/search'
  },
  {
    id: 3,
    type: 'AI-Detected Anomaly',
    source: '203.45.67.89',
    time: '8 minutes ago',
    severity: 'high',
    status: 'blocked',
    method: 'POST',
    endpoint: '/login'
  },
  {
    id: 4,
    type: 'CSRF Token Missing',
    source: '172.16.0.23',
    time: '12 minutes ago',
    severity: 'low',
    status: 'warned',
    method: 'PUT',
    endpoint: '/api/profile'
  },
];

export const RecentThreats = () => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-400 bg-red-900/20 border-red-600';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-600';
      case 'low': return 'text-blue-400 bg-blue-900/20 border-blue-600';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'blocked': return <Shield className="h-4 w-4 text-green-400" />;
      case 'warned': return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
      default: return <Zap className="h-4 w-4 text-blue-400" />;
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-cyan-400" />
          <span>Recent Threats</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {threats.map((threat) => (
            <div 
              key={threat.id} 
              className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-center space-x-4">
                {getStatusIcon(threat.status)}
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium">{threat.type}</h4>
                    <Badge className={`text-xs ${getSeverityColor(threat.severity)}`}>
                      {threat.severity.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-400">
                    {threat.method} {threat.endpoint} from {threat.source}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium capitalize">{threat.status}</p>
                <p className="text-xs text-gray-400">{threat.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
