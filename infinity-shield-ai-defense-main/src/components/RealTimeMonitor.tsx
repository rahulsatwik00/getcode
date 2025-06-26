
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Activity, Play, Pause, AlertTriangle, Shield, Eye } from 'lucide-react';

interface LiveRequest {
  id: string;
  timestamp: string;
  method: string;
  endpoint: string;
  source: string;
  status: 'allowed' | 'blocked' | 'warning';
  responseTime: number;
  threatLevel: 'low' | 'medium' | 'high';
}

export const RealTimeMonitor = () => {
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [requests, setRequests] = useState<LiveRequest[]>([]);

  useEffect(() => {
    if (!isMonitoring) return;

    const generateRequest = (): LiveRequest => {
      const methods = ['GET', 'POST', 'PUT', 'DELETE'];
      const endpoints = ['/api/users', '/login', '/search', '/api/products', '/dashboard', '/api/orders'];
      const sources = ['192.168.1.', '10.0.0.', '172.16.0.', '203.45.67.'];
      const statuses: Array<'allowed' | 'blocked' | 'warning'> = ['allowed', 'blocked', 'warning'];
      const threatLevels: Array<'low' | 'medium' | 'high'> = ['low', 'medium', 'high'];

      return {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toLocaleTimeString(),
        method: methods[Math.floor(Math.random() * methods.length)],
        endpoint: endpoints[Math.floor(Math.random() * endpoints.length)],
        source: sources[Math.floor(Math.random() * sources.length)] + Math.floor(Math.random() * 255),
        status: statuses[Math.floor(Math.random() * statuses.length)],
        responseTime: Math.random() * 2,
        threatLevel: threatLevels[Math.floor(Math.random() * threatLevels.length)],
      };
    };

    const interval = setInterval(() => {
      const newRequest = generateRequest();
      setRequests(prev => [newRequest, ...prev.slice(0, 19)]);
    }, 1000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, [isMonitoring]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'allowed': return 'text-green-400 bg-green-900/20 border-green-600';
      case 'blocked': return 'text-red-400 bg-red-900/20 border-red-600';
      case 'warning': return 'text-yellow-400 bg-yellow-900/20 border-yellow-600';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-600';
    }
  };

  const getThreatColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'allowed': return <Eye className="h-4 w-4 text-green-400" />;
      case 'blocked': return <Shield className="h-4 w-4 text-red-400" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Real-time Monitor</h1>
          <p className="text-gray-400">Live request analysis and threat detection</p>
        </div>
        <Button
          onClick={() => setIsMonitoring(!isMonitoring)}
          className={`${isMonitoring ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
        >
          {isMonitoring ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
          {isMonitoring ? 'Pause' : 'Resume'} Monitoring
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Requests/min</p>
                <p className="text-2xl font-bold mt-1">847</p>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                  <span className="text-green-400 text-sm">Live</span>
                </div>
              </div>
              <Activity className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Avg Response</p>
                <p className="text-2xl font-bold mt-1">0.8ms</p>
                <p className="text-green-400 text-sm mt-1">Excellent</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-green-900/20 border border-green-600 flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Protection Status</p>
                <p className="text-2xl font-bold mt-1 text-green-400">ACTIVE</p>
                <p className="text-gray-400 text-sm mt-1">All systems operational</p>
              </div>
              <Shield className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-cyan-400" />
            <span>Live Request Stream</span>
            {isMonitoring && (
              <div className="flex items-center space-x-2 ml-auto">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">MONITORING</span>
              </div>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {requests.map((request) => (
              <div 
                key={request.id}
                className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors animate-fade-in"
              >
                <div className="flex items-center space-x-4">
                  {getStatusIcon(request.status)}
                  <div className="font-mono text-sm">
                    <span className="text-cyan-400">{request.method}</span>
                    <span className="text-gray-300 ml-2">{request.endpoint}</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    from {request.source}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className={`text-xs ${getStatusColor(request.status)}`}>
                    {request.status.toUpperCase()}
                  </Badge>
                  <span className={`text-xs font-medium ${getThreatColor(request.threatLevel)}`}>
                    {request.threatLevel.toUpperCase()}
                  </span>
                  <span className="text-xs text-gray-400">
                    {request.responseTime.toFixed(2)}ms
                  </span>
                  <span className="text-xs text-gray-500 font-mono">
                    {request.timestamp}
                  </span>
                </div>
              </div>
            ))}
            {requests.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                {isMonitoring ? 'Waiting for requests...' : 'Monitoring paused'}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
