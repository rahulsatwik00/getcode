
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Shield, Eye, Brain, Globe, Lock } from 'lucide-react';

export const SecurityInsights = () => {
  const insights = [
    {
      title: 'SQL Injection Pattern Detected',
      description: 'Unusual SQL injection attempts from geographic cluster in Eastern Europe',
      severity: 'high',
      confidence: 95,
      recommendation: 'Consider geo-blocking or enhanced monitoring for this region',
      timestamp: '2 hours ago',
      icon: Brain,
    },
    {
      title: 'DDoS Attack Mitigated',
      description: 'Successfully blocked coordinated DDoS attack from 247 unique IP addresses',
      severity: 'high',
      confidence: 99,
      recommendation: 'Attack successfully mitigated. Monitor for follow-up attempts',
      timestamp: '4 hours ago',
      icon: Shield,
    },
    {
      title: 'Zero-day Exploit Attempt',
      description: 'AI model detected potential zero-day exploit targeting authentication system',
      severity: 'critical',
      confidence: 87,
      recommendation: 'Immediate security patch required for authentication module',
      timestamp: '6 hours ago',
      icon: Eye,
    },
    {
      title: 'Anomalous User Behavior',
      description: 'Detected unusual access patterns suggesting compromised user account',
      severity: 'medium',
      confidence: 78,
      recommendation: 'Force password reset for affected user account',
      timestamp: '8 hours ago',
      icon: Lock,
    },
  ];

  const securityMetrics = [
    { label: 'Overall Security Score', value: 94, color: 'bg-green-500' },
    { label: 'Threat Detection Rate', value: 98, color: 'bg-blue-500' },
    { label: 'False Positive Rate', value: 2, color: 'bg-yellow-500', inverse: true },
    { label: 'Response Time Score', value: 96, color: 'bg-purple-500' },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-500 bg-red-900/20 border-red-600';
      case 'high': return 'text-orange-400 bg-orange-900/20 border-orange-600';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-600';
      case 'low': return 'text-green-400 bg-green-900/20 border-green-600';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Security Insights</h1>
        <p className="text-gray-400">AI-powered analysis and actionable security recommendations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {securityMetrics.map((metric, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-400">{metric.label}</h3>
                  <TrendingUp className="h-4 w-4 text-green-400" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{metric.value}%</span>
                    <Badge variant="outline" className="text-green-400 border-green-600">
                      {metric.inverse ? 'Low' : 'Excellent'}
                    </Badge>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-cyan-400" />
              <span>Geographic Threat Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                <div>
                  <h4 className="font-medium">Eastern Europe</h4>
                  <p className="text-sm text-gray-400">High SQL injection activity</p>
                </div>
                <Badge className="text-red-400 bg-red-900/20 border-red-600">HIGH RISK</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                <div>
                  <h4 className="font-medium">Southeast Asia</h4>
                  <p className="text-sm text-gray-400">Moderate XSS attempts</p>
                </div>
                <Badge className="text-yellow-400 bg-yellow-900/20 border-yellow-600">MEDIUM RISK</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                <div>
                  <h4 className="font-medium">North America</h4>
                  <p className="text-sm text-gray-400">Low threat activity</p>
                </div>
                <Badge className="text-green-400 bg-green-900/20 border-green-600">LOW RISK</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-purple-400" />
              <span>AI Model Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Pattern Recognition</span>
                  <span className="text-sm font-medium">97.3%</span>
                </div>
                <Progress value={97.3} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Anomaly Detection</span>
                  <span className="text-sm font-medium">94.8%</span>
                </div>
                <Progress value={94.8} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Behavioral Analysis</span>
                  <span className="text-sm font-medium">91.2%</span>
                </div>
                <Progress value={91.2} className="h-2" />
              </div>
              <div className="pt-2 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">94.4%</div>
                  <div className="text-sm text-gray-400">Overall AI Accuracy</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Eye className="h-5 w-5 text-cyan-400" />
            <span>Security Insights & Recommendations</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <div key={index} className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-cyan-900/20 rounded-lg border border-cyan-600">
                      <Icon className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{insight.title}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge className={`text-xs ${getSeverityColor(insight.severity)}`}>
                            {insight.severity.toUpperCase()}
                          </Badge>
                          <span className="text-xs text-gray-400">{insight.timestamp}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">{insight.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-400">Confidence:</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={insight.confidence} className="w-16 h-1" />
                            <span className="text-xs font-medium">{insight.confidence}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-blue-900/20 rounded border border-blue-600">
                        <p className="text-blue-300 text-sm">
                          <strong>Recommendation:</strong> {insight.recommendation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
