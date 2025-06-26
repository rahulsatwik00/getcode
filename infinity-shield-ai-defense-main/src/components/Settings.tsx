
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Settings as SettingsIcon, Shield, Brain, Globe, Bell, Save } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const Settings = () => {
  const [settings, setSettings] = useState({
    protectionEnabled: true,
    aiDetection: true,
    geoBlocking: false,
    realTimeAlerts: true,
    logRetention: 30,
    sensitivityLevel: [75],
    maxRequestsPerMinute: 1000,
    blockDuration: 300,
  });

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your WAF configuration has been updated successfully.",
    });
  };

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">WAF Settings</h1>
        <p className="text-gray-400">Configure your Web Application Firewall protection settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-cyan-400" />
              <span>Protection Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="protection" className="text-sm font-medium">WAF Protection</Label>
                <p className="text-xs text-gray-400">Enable/disable main protection</p>
              </div>
              <Switch
                id="protection"
                checked={settings.protectionEnabled}
                onCheckedChange={(checked) => handleSettingChange('protectionEnabled', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="ai-detection" className="text-sm font-medium">AI-Powered Detection</Label>
                <p className="text-xs text-gray-400">Machine learning threat detection</p>
              </div>
              <Switch
                id="ai-detection"
                checked={settings.aiDetection}
                onCheckedChange={(checked) => handleSettingChange('aiDetection', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="geo-blocking" className="text-sm font-medium">Geographic Blocking</Label>
                <p className="text-xs text-gray-400">Block requests from high-risk regions</p>
              </div>
              <Switch
                id="geo-blocking"
                checked={settings.geoBlocking}
                onCheckedChange={(checked) => handleSettingChange('geoBlocking', checked)}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Detection Sensitivity</Label>
              <div className="px-2">
                <Slider
                  value={settings.sensitivityLevel}
                  onValueChange={(value) => handleSettingChange('sensitivityLevel', value)}
                  max={100}
                  min={0}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Low</span>
                  <span>{settings.sensitivityLevel[0]}%</span>
                  <span>High</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-purple-400" />
              <span>AI Configuration</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="max-requests" className="text-sm font-medium">Max Requests per Minute</Label>
              <Input
                id="max-requests"
                type="number"
                value={settings.maxRequestsPerMinute}
                onChange={(e) => handleSettingChange('maxRequestsPerMinute', parseInt(e.target.value))}
                className="bg-gray-900 border-gray-600"
              />
              <p className="text-xs text-gray-400">Rate limiting threshold</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="block-duration" className="text-sm font-medium">Block Duration (seconds)</Label>
              <Input
                id="block-duration"
                type="number"
                value={settings.blockDuration}
                onChange={(e) => handleSettingChange('blockDuration', parseInt(e.target.value))}
                className="bg-gray-900 border-gray-600"
              />
              <p className="text-xs text-gray-400">How long to block offending IPs</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="log-retention" className="text-sm font-medium">Log Retention (days)</Label>
              <Input
                id="log-retention"
                type="number"
                value={settings.logRetention}
                onChange={(e) => handleSettingChange('logRetention', parseInt(e.target.value))}
                className="bg-gray-900 border-gray-600"
              />
              <p className="text-xs text-gray-400">How long to keep attack logs</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-blue-400" />
              <span>Network Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="whitelist" className="text-sm font-medium">IP Whitelist</Label>
              <Input
                id="whitelist"
                placeholder="192.168.1.0/24, 10.0.0.1"
                className="bg-gray-900 border-gray-600"
              />
              <p className="text-xs text-gray-400">Comma-separated IPs or CIDR blocks</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="blacklist" className="text-sm font-medium">IP Blacklist</Label>
              <Input
                id="blacklist"
                placeholder="203.0.113.0/24, 198.51.100.1"
                className="bg-gray-900 border-gray-600"
              />
              <p className="text-xs text-gray-400">Permanently blocked IPs</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="allowed-countries" className="text-sm font-medium">Allowed Countries</Label>
              <Input
                id="allowed-countries"
                placeholder="US, CA, GB, AU"
                className="bg-gray-900 border-gray-600"
              />
              <p className="text-xs text-gray-400">ISO country codes (if geo-blocking enabled)</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-yellow-400" />
              <span>Notification Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="real-time-alerts" className="text-sm font-medium">Real-time Alerts</Label>
                <p className="text-xs text-gray-400">Instant notifications for threats</p>
              </div>
              <Switch
                id="real-time-alerts"
                checked={settings.realTimeAlerts}
                onCheckedChange={(checked) => handleSettingChange('realTimeAlerts', checked)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Alert Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@company.com"
                className="bg-gray-900 border-gray-600"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="webhook" className="text-sm font-medium">Webhook URL</Label>
              <Input
                id="webhook"
                type="url"
                placeholder="https://api.company.com/waf-alerts"
                className="bg-gray-900 border-gray-600"
              />
              <p className="text-xs text-gray-400">Optional webhook for integrations</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
          Reset to Defaults
        </Button>
        <Button onClick={handleSave} className="bg-cyan-600 hover:bg-cyan-700">
          <Save className="h-4 w-4 mr-2" />
          Save Configuration
        </Button>
      </div>
    </div>
  );
};
