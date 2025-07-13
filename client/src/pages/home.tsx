import { useState } from "react";
import MatrixBackground from "@/components/matrix-background";
import { Shield, Search, Filter, Github, MessageSquareDiff, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ExpertiseLevels from "@/components/expertise-levels";
import CloudSecurity from "@/components/cloud-security";
import IncidentResponse from "@/components/incident-response";
import ComplianceFrameworks from "@/components/compliance-frameworks";
import SecurityTools from "@/components/security-tools";
import CareerProgression from "@/components/career-progression";
import SearchBar from "@/components/search-bar";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-cyber-dark text-white font-sans overflow-x-hidden">
      <MatrixBackground />
      
      {/* Navigation Header */}
      <nav className="glassmorphism sticky top-0 z-50 border-b border-cyber-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="text-cyber-green text-2xl" />
                <span className="text-xl font-bold text-cyber-green font-mono">CyberSec Hub</span>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <span className="text-cyber-green text-sm">●</span>
                <span className="text-xs text-cyber-gray">SOC-READY</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-4">
                <button className="text-cyber-gray hover:text-cyber-green transition-colors">
                  Dashboard
                </button>
                <button className="text-cyber-gray hover:text-cyber-green transition-colors">
                  Tools
                </button>
                <button className="text-cyber-gray hover:text-cyber-green transition-colors">
                  Playbooks
                </button>
                <button className="text-cyber-gray hover:text-cyber-green transition-colors">
                  Compliance
                </button>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="status-online">
                  <span className="text-xs">●</span>
                  <span className="text-xs ml-1">SECURE</span>
                </div>
                <button className="text-cyber-gray hover:text-cyber-green">
                  <Shield className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Professional</span>
              <span className="text-cyber-green"> Cybersecurity</span>
              <br />
              <span className="text-cyber-blue">Reference Hub</span>
            </h1>
            <p className="text-xl text-cyber-gray mb-8 max-w-3xl mx-auto">
              Comprehensive security operations center for entry to elite cybersecurity professionals. 
              From incident response to compliance frameworks - everything you need in one secure platform.
            </p>
            
            <SearchBar onSearch={setSearchQuery} />

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="glassmorphism rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-cyber-green mb-2">1,247</div>
                <div className="text-sm text-cyber-gray">Security Tools</div>
              </div>
              <div className="glassmorphism rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-cyber-blue mb-2">89</div>
                <div className="text-sm text-cyber-gray">Playbooks</div>
              </div>
              <div className="glassmorphism rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-cyber-green mb-2">24/7</div>
                <div className="text-sm text-cyber-gray">Monitoring</div>
              </div>
              <div className="glassmorphism rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-cyber-blue mb-2">15</div>
                <div className="text-sm text-cyber-gray">Frameworks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExpertiseLevels />
      <CloudSecurity />
      <IncidentResponse />
      <ComplianceFrameworks />
      <SecurityTools />
      <CareerProgression />

      {/* Footer */}
      <footer className="bg-cyber-darker border-t border-cyber-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="text-cyber-green text-2xl" />
                <span className="text-xl font-bold text-cyber-green font-mono">CyberSec Hub</span>
              </div>
              <p className="text-cyber-gray text-sm">
                Professional cybersecurity reference platform for security operations and career development.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-cyber-gray">
                <li><a href="#" className="hover:text-cyber-green transition-colors">Security Tools</a></li>
                <li><a href="#" className="hover:text-cyber-green transition-colors">Incident Playbooks</a></li>
                <li><a href="#" className="hover:text-cyber-green transition-colors">Compliance Guides</a></li>
                <li><a href="#" className="hover:text-cyber-green transition-colors">Career Paths</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Frameworks</h4>
              <ul className="space-y-2 text-sm text-cyber-gray">
                <li><a href="#" className="hover:text-cyber-green transition-colors">NIST Cybersecurity</a></li>
                <li><a href="#" className="hover:text-cyber-green transition-colors">ISO 27001</a></li>
                <li><a href="#" className="hover:text-cyber-green transition-colors">SOC 2</a></li>
                <li><a href="#" className="hover:text-cyber-green transition-colors">PCI DSS</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-cyber-gray">
                <li><a href="#" className="hover:text-cyber-green transition-colors">GitHub Repository</a></li>
                <li><a href="#" className="hover:text-cyber-green transition-colors">Security Blog</a></li>
                <li><a href="#" className="hover:text-cyber-green transition-colors">MessageSquareDiff Community</a></li>
                <li><a href="#" className="hover:text-cyber-green transition-colors">Contribute</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-cyber-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-cyber-gray text-sm">
              © 2024 CyberSec Hub. Open source cybersecurity reference platform.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="status-online text-sm">
                <Shield className="w-4 h-4 inline mr-1" /> Secure Connection
              </span>
              <div className="flex space-x-2">
                <a href="#" className="text-cyber-gray hover:text-cyber-green">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-cyber-gray hover:text-cyber-green">
                  <MessageSquareDiff className="w-5 h-5" />
                </a>
                <a href="#" className="text-cyber-gray hover:text-cyber-green">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
