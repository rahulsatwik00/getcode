
import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';
import { ThreatAnalytics } from '@/components/ThreatAnalytics';
import { RealTimeMonitor } from '@/components/RealTimeMonitor';
import { SecurityInsights } from '@/components/SecurityInsights';
import { AttackLogs } from '@/components/AttackLogs';
import { Settings } from '@/components/Settings';
import { ProtectionFlow } from '@/components/ProtectionFlow';
import { LandingPage } from '@/components/LandingPage';

const Index = () => {
  const [activeSection, setActiveSection] = useState('landing');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeSection) {
      case 'landing':
        return <LandingPage />;
      case 'flow':
        return <ProtectionFlow />;
      case 'dashboard':
        return <Dashboard />;
      case 'analytics':
        return <ThreatAnalytics />;
      case 'monitor':
        return <RealTimeMonitor />;
      case 'insights':
        return <SecurityInsights />;
      case 'logs':
        return <AttackLogs />;
      case 'settings':
        return <Settings />;
      default:
        return <LandingPage />;
    }
  };

  // Show landing page without sidebar and header
  if (activeSection === 'landing') {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <LandingPage />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
          <div className="p-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
