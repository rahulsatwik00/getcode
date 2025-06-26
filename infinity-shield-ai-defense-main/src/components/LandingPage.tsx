
import { useState } from 'react';
import { Shield, Search, Github, Linkedin, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export const LandingPage = () => {
  const [request, setRequest] = useState('');
  const [analysis, setAnalysis] = useState<{
    status: 'clean' | 'threat' | 'analyzing' | null;
    message: string;
  }>({ status: null, message: '' });

  const analyzeRequest = () => {
    setAnalysis({ status: 'analyzing', message: 'Analyzing request...' });
    
    setTimeout(() => {
      // Simple threat detection simulation
      const threatPatterns = [
        'script', 'alert', 'javascript:', 'onload', 'onerror', 'onclick',
        'select * from', 'union select', 'drop table', 'insert into',
        '../', '..\\', '/etc/passwd', 'cmd.exe'
      ];
      
      const isThreat = threatPatterns.some(pattern => 
        request.toLowerCase().includes(pattern.toLowerCase())
      );
      
      if (isThreat) {
        setAnalysis({
          status: 'threat',
          message: 'Threat Confirmed! AI Defense System Blocked Suspicious Activity. 🔒'
        });
      } else {
        setAnalysis({
          status: 'clean',
          message: 'All Clear! Your request passed our security checks with flying colors. ✨'
        });
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-red-500" />
          <span className="text-2xl font-bold">WAFinity</span>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white cursor-pointer transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-lg text-gray-400 mb-4">
            Infinite Protection, <span className="text-cyan-400">Intelligent Detection</span>
          </p>
        </div>
        
        <h1 className="text-6xl font-bold mb-8 leading-tight">
          Stop Unknown<br />
          Attacks Before<br />
          They Strike
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Powered by the most advanced AI detection model, WAFinity 
          Firewall integrates seamlessly with modern protocols and rollups to 
          block over 99% of cyberattacks.
        </p>
        
        <div className="flex items-center justify-center space-x-6 mb-20">
          <Button className="bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 text-lg">
            <Search className="mr-2 h-5 w-5" />
            Check Security
          </Button>
          <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg">
            Learn More
          </Button>
        </div>

        {/* Glowing Orb */}
        <div className="flex justify-center mb-20">
          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-cyan-500/20 to-green-500/20 blur-xl"></div>
            <div className="absolute inset-8 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-green-400 animate-pulse"></div>
            <div className="absolute inset-16 w-16 h-16 rounded-full bg-cyan-300 shadow-lg shadow-cyan-400/50"></div>
          </div>
        </div>
      </section>

      {/* How WAFinity Works */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">How WAFinity Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Layer 1: Signature Detection</h3>
              <p className="text-gray-400">
                Incoming requests are first validated against our comprehensive database of 
                known attack signatures for immediate threat detection
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Layer 2: AI Analysis</h3>
              <p className="text-gray-400">
                Requests that pass signature checks undergo advanced feature extraction 
                and ML model analysis to detect unknown attack patterns
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Validated Requests</h3>
              <p className="text-gray-400">
                Only requests that successfully clear both security layers are considered 
                valid and allowed to proceed
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Request Checker */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Security <span className="text-cyan-400">Request Checker</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Enter your request below to analyze potential security threats using our 
            advanced AI detection system.
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <Input
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              placeholder="Enter your request to check for potential threats..."
              className="bg-gray-800 border-gray-600 text-white h-16 text-lg px-6"
            />
          </div>
          
          <Button
            onClick={analyzeRequest}
            disabled={!request.trim() || analysis.status === 'analyzing'}
            className="w-full bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black h-16 text-lg font-semibold"
          >
            {analysis.status === 'analyzing' ? 'Analyzing Request...' : 'Analyze Request'}
          </Button>

          {analysis.status === 'analyzing' && (
            <Card className="bg-gray-800 border-gray-600">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-400"></div>
                  <span className="text-yellow-400">Suspicious Pattern Detected - Engaging Advanced AI Analysis...</span>
                </div>
              </CardContent>
            </Card>
          )}

          {analysis.status === 'clean' && (
            <Card className="bg-green-900/20 border-green-600">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-400">All Clear! {analysis.message}</h4>
                    <p className="text-gray-400">Your request has been verified and cleared by our security system.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {analysis.status === 'threat' && (
            <Card className="bg-red-900/20 border-red-600">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-400">🚨 {analysis.message}</h4>
                    <p className="text-gray-400">AI-powered deep analysis complete.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">What Our Users Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <p className="text-gray-300 mb-4">
                "WAFinity detected threats our old firewall missed. Highly recommend"
              </p>
              <p className="text-gray-400 text-sm">- Pradyum S, Security Analyst</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <p className="text-gray-300 mb-4">
                "The AI-powered detection is a game-changer. No breaches since we switched"
              </p>
              <p className="text-gray-400 text-sm">- Riyaz M, Data Scientist</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <p className="text-gray-300 mb-4">
                "Simple, effective, and powerful. WAFinity is our first line of defense."
              </p>
              <p className="text-gray-400 text-sm">- Amogh G, ML Security Engineer</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 WAFinity | AI-Powered Web Security | <span className="text-cyan-400">Karthik™</span></p>
        </div>
      </footer>
    </div>
  );
};
