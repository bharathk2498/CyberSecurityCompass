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
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            CyberSec Tools Platform
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Your comprehensive cybersecurity tools and incident response platform
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Security Tools</h3>
              <p className="text-muted-foreground">
                Comprehensive catalog of cybersecurity tools organized by expertise level
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Incident Response</h3>
              <p className="text-muted-foreground">
                Step-by-step playbooks for handling security incidents
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Compliance</h3>
              <p className="text-muted-foreground">
                Documentation and resources for various compliance standards
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Career Development</h3>
              <p className="text-muted-foreground">
                Career progression paths for cybersecurity professionals
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Cloud Security</h3>
              <p className="text-muted-foreground">
                Cloud-specific security tools and best practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
