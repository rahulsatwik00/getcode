
import { 
  BarChart, 
  Shield, 
  Activity, 
  Eye, 
  FileText, 
  Settings as SettingsIcon,
  ChevronRight,
  Globe,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const menuItems = [
  { id: 'landing', label: 'Home', icon: Home },
  { id: 'flow', label: 'Protection Flow', icon: Globe },
  { id: 'dashboard', label: 'Dashboard', icon: BarChart },
  { id: 'analytics', label: 'Threat Analytics', icon: Shield },
  { id: 'monitor', label: 'Real-time Monitor', icon: Activity },
  { id: 'insights', label: 'Security Insights', icon: Eye },
  { id: 'logs', label: 'Attack Logs', icon: FileText },
  { id: 'settings', label: 'Settings', icon: SettingsIcon },
];

export const Sidebar = ({ isOpen, activeSection, setActiveSection }: SidebarProps) => {
  return (
    <aside 
      className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gray-800 border-r border-gray-700 transition-all duration-300 z-40",
        isOpen ? "w-64" : "w-16"
      )}
    >
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start h-12 transition-all duration-200",
                isActive 
                  ? "bg-cyan-600/20 text-cyan-400 border-r-2 border-cyan-400" 
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              )}
              onClick={() => setActiveSection(item.id)}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {isOpen && (
                <>
                  <span className="ml-3 flex-1 text-left">{item.label}</span>
                  {isActive && <ChevronRight className="h-4 w-4" />}
                </>
              )}
            </Button>
          );
        })}
      </nav>
    </aside>
  );
};
