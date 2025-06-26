
import { Shield, Globe, Smartphone, Monitor, User, Bug, Search, X } from 'lucide-react';

export const ProtectionFlow = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            WAFinity Protection Flow
          </h1>
          <p className="text-gray-400 text-lg">Advanced Web Application Firewall Architecture</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
          {/* Legitimate Users */}
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <User className="h-8 w-8 text-cyan-400" />
                <span className="text-xl font-semibold">Legitimate Users</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 bg-gray-700 p-3 rounded">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm font-bold">G</div>
                  <span>Google</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-700 p-3 rounded">
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-sm font-bold">b</div>
                  <span>bing</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-700 p-3 rounded">
                  <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-white text-sm font-bold">Y!</div>
                  <span>YAHOO!</span>
                </div>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center">
              <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[20px] border-l-transparent border-r-transparent border-t-cyan-400"></div>
            </div>
          </div>

          {/* Internet */}
          <div className="text-center">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 mb-6">
              <Globe className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
              <span className="text-2xl font-semibold">Internet</span>
            </div>

            {/* Arrows to WAFinity */}
            <div className="flex justify-center space-x-4">
              <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[15px] border-l-transparent border-r-transparent border-b-cyan-400"></div>
              <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[15px] border-l-transparent border-r-transparent border-b-red-400"></div>
            </div>
          </div>

          {/* WAFinity */}
          <div className="text-center">
            <div className="bg-gray-800 p-8 rounded-lg border border-cyan-500/50 mb-6 relative">
              <Shield className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
              <span className="text-2xl font-semibold text-cyan-400">WAFinity</span>
              <div className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1">
                <X className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* Arrow to protected resources */}
            <div className="flex justify-center">
              <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[15px] border-l-transparent border-r-transparent border-b-green-400"></div>
            </div>

            {/* Check mark */}
            <div className="mt-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Protected Resources */}
          <div className="bg-white text-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">Protected Resources</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-100 rounded">
                <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="font-medium">Web APIs</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-100 rounded">
                <Monitor className="h-8 w-8 text-cyan-500" />
                <span className="font-medium">Websites</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-100 rounded">
                <Smartphone className="h-8 w-8 text-cyan-500" />
                <span className="font-medium">Web apps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Threats Section */}
        <div className="mt-12">
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-red-400 text-center">Blocked Threats</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-4 rounded-lg border border-red-500/30">
                <div className="flex items-center space-x-3 mb-2">
                  <User className="h-8 w-8 text-red-400" />
                  <span className="font-semibold text-red-400">Attackers</span>
                </div>
                <p className="text-gray-400 text-sm">Malicious users attempting to exploit vulnerabilities</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg border border-red-500/30">
                <div className="flex items-center space-x-3 mb-2">
                  <Bug className="h-8 w-8 text-red-400" />
                  <span className="font-semibold text-red-400">Malicious bots</span>
                </div>
                <p className="text-gray-400 text-sm">Automated scripts performing harmful activities</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg border border-red-500/30">
                <div className="flex items-center space-x-3 mb-2">
                  <Search className="h-8 w-8 text-red-400" />
                  <span className="font-semibold text-red-400">Vulnerability Scanners</span>
                </div>
                <p className="text-gray-400 text-sm">Tools probing for security weaknesses</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
              <X className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Block Known Web Attacks</h4>
            <p className="text-gray-400">Advanced signature-based detection for known threats</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2">AI-powered Threat Detection</h4>
            <p className="text-gray-400">Machine learning algorithms for anomaly detection</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Real-time Analysis</h4>
            <p className="text-gray-400">Instant protection with minimal latency</p>
          </div>
        </div>
      </div>
    </div>
  );
};
