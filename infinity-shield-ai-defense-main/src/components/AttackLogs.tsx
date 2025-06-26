
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Search, Download, Filter, AlertTriangle, Shield, Eye } from 'lucide-react';

const attackLogs = [
  {
    id: 'ATK-001',
    timestamp: '2024-01-15 14:23:45',
    type: 'SQL Injection',
    source: '192.168.1.100',
    target: '/api/users/login',
    method: 'POST',
    severity: 'high',
    status: 'blocked',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    payload: "' OR '1'='1' --",
    rule: 'SQL-001-INJECTION-BASIC',
    response: 'Request blocked by WAF rule SQL-001-INJECTION-BASIC'
  },
  {
    id: 'ATK-002',
    timestamp: '2024-01-15 14:20:12',
    type: 'XSS Attack',
    source: '10.0.0.25',
    target: '/search',
    method: 'GET',
    severity: 'medium',
    status: 'blocked',
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
    payload: '<script>alert("XSS")</script>',
    rule: 'XSS-002-SCRIPT-TAG',
    response: 'Malicious script detected and blocked'
  },
  {
    id: 'ATK-003',
    timestamp: '2024-01-15 14:18:33',
    type: 'AI-Detected Anomaly',
    source: '203.45.67.89',
    target: '/admin/dashboard',
    method: 'GET',
    severity: 'high',
    status: 'blocked',
    userAgent: 'curl/7.68.0',
    payload: 'Suspicious access pattern detected',
    rule: 'AI-ANOMALY-001',
    response: 'Anomalous behavior blocked by AI detection'
  },
  {
    id: 'ATK-004',
    timestamp: '2024-01-15 14:15:21',
    type: 'CSRF Attack',
    source: '172.16.0.45',
    target: '/api/profile/update',
    method: 'PUT',
    severity: 'medium',
    status: 'warned',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
    payload: 'Missing CSRF token',
    rule: 'CSRF-001-TOKEN-MISSING',
    response: 'Request allowed with warning'
  },
  {
    id: 'ATK-005',
    timestamp: '2024-01-15 14:12:08',
    type: 'Directory Traversal',
    source: '198.51.100.42',
    target: '/files/../../../etc/passwd',
    method: 'GET',
    severity: 'high',
    status: 'blocked',
    userAgent: 'Wget/1.20.3',
    payload: '../../../etc/passwd',
    rule: 'DIR-TRAV-001',
    response: 'Directory traversal attempt blocked'
  }
];

export const AttackLogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedLog, setSelectedLog] = useState<string | null>(null);

  const filteredLogs = attackLogs.filter(log => {
    const matchesSearch = log.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.source.includes(searchTerm) ||
                         log.target.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = severityFilter === 'all' || log.severity === severityFilter;
    const matchesStatus = statusFilter === 'all' || log.status === statusFilter;
    
    return matchesSearch && matchesSeverity && matchesStatus;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-400 bg-red-900/20 border-red-600';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-600';
      case 'low': return 'text-green-400 bg-green-900/20 border-green-600';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'blocked': return 'text-red-400 bg-red-900/20 border-red-600';
      case 'warned': return 'text-yellow-400 bg-yellow-900/20 border-yellow-600';
      case 'allowed': return 'text-green-400 bg-green-900/20 border-green-600';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'blocked': return <Shield className="h-4 w-4 text-red-400" />;
      case 'warned': return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
      case 'allowed': return <Eye className="h-4 w-4 text-green-400" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Attack Logs</h1>
          <p className="text-gray-400">Comprehensive security event logging and analysis</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Download className="h-4 w-4 mr-2" />
          Export Logs
        </Button>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-cyan-400" />
            <span>Filter & Search</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search logs by type, source IP, or target..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-900 border-gray-600 text-white"
                />
              </div>
            </div>
            <Select value={severityFilter} onValueChange={setSeverityFilter}>
              <SelectTrigger className="w-40 bg-gray-900 border-gray-600">
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40 bg-gray-900 border-gray-600">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="blocked">Blocked</SelectItem>
                <SelectItem value="warned">Warned</SelectItem>
                <SelectItem value="allowed">Allowed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-cyan-400" />
              <span>Security Events ({filteredLogs.length})</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredLogs.map((log) => (
                <div
                  key={log.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedLog === log.id 
                      ? 'bg-cyan-900/20 border-cyan-600' 
                      : 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setSelectedLog(log.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(log.status)}
                      <h3 className="font-medium text-sm">{log.type}</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={`text-xs ${getSeverityColor(log.severity)}`}>
                        {log.severity.toUpperCase()}
                      </Badge>
                      <Badge className={`text-xs ${getStatusColor(log.status)}`}>
                        {log.status.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 space-y-1">
                    <div>Source: {log.source}</div>
                    <div>Target: {log.target}</div>
                    <div>Time: {log.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedLog ? (
              <div className="space-y-4">
                {(() => {
                  const log = attackLogs.find(l => l.id === selectedLog);
                  if (!log) return <div>Log not found</div>;
                  
                  return (
                    <>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Event ID:</span>
                          <div className="font-mono">{log.id}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Timestamp:</span>
                          <div className="font-mono">{log.timestamp}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Attack Type:</span>
                          <div>{log.type}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Method:</span>
                          <div className="font-mono">{log.method}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Source IP:</span>
                          <div className="font-mono">{log.source}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Target:</span>
                          <div className="font-mono">{log.target}</div>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-700 pt-4">
                        <div className="space-y-3">
                          <div>
                            <span className="text-gray-400 text-sm">User Agent:</span>
                            <div className="font-mono text-xs bg-gray-900 p-2 rounded mt-1">
                              {log.userAgent}
                            </div>
                          </div>
                          <div>
                            <span className="text-gray-400 text-sm">Attack Payload:</span>
                            <div className="font-mono text-xs bg-red-900/20 p-2 rounded mt-1 border border-red-600">
                              {log.payload}
                            </div>
                          </div>
                          <div>
                            <span className="text-gray-400 text-sm">Rule Triggered:</span>
                            <div className="font-mono text-xs bg-blue-900/20 p-2 rounded mt-1 border border-blue-600">
                              {log.rule}
                            </div>
                          </div>
                          <div>
                            <span className="text-gray-400 text-sm">Response:</span>
                            <div className="text-xs bg-gray-900 p-2 rounded mt-1">
                              {log.response}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-400">
                Select an event from the list to view details
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
