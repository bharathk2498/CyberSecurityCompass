import { AlertTriangle, Bug, Mail, Bomb, UserX, Skull, Play, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IncidentResponse() {
  const playbooks = [
    {
      icon: <AlertTriangle className="text-white" />,
      title: "Data Breach",
      severity: "CRITICAL",
      severityColor: "bg-cyber-red",
      bgColor: "bg-cyber-red",
      hoverColor: "hover:border-cyber-red",
      buttonColor: "bg-cyber-red hover:bg-red-600",
      description: "Immediate response procedures for data compromise incidents",
      responseTime: "< 15 min",
      team: "CISO, Legal, PR",
    },
    {
      icon: <Bug className="text-cyber-dark" />,
      title: "Malware Outbreak",
      severity: "HIGH",
      severityColor: "bg-yellow-500",
      bgColor: "bg-yellow-500",
      hoverColor: "hover:border-yellow-500",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      description: "Containment and eradication procedures for malware incidents",
      responseTime: "< 30 min",
      team: "SOC, IT, SecOps",
    },
    {
      icon: <Mail className="text-white" />,
      title: "Phishing Campaign",
      severity: "MEDIUM",
      severityColor: "bg-cyber-blue",
      bgColor: "bg-cyber-blue",
      hoverColor: "hover:border-cyber-blue",
      buttonColor: "bg-cyber-blue hover:bg-blue-600",
      description: "Response procedures for email-based social engineering attacks",
      responseTime: "< 60 min",
      team: "SecOps, IT, HR",
    },
    {
      icon: <Bomb className="text-white" />,
      title: "DDoS Attack",
      severity: "HIGH",
      severityColor: "bg-purple-500",
      bgColor: "bg-purple-500",
      hoverColor: "hover:border-purple-500",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      description: "Mitigation procedures for distributed denial of service attacks",
      responseTime: "< 10 min",
      team: "NetOps, SOC, ISP",
    },
    {
      icon: <UserX className="text-white" />,
      title: "Insider Threat",
      severity: "SENSITIVE",
      severityColor: "bg-orange-500",
      bgColor: "bg-orange-500",
      hoverColor: "hover:border-orange-500",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      description: "Investigation procedures for internal security threats",
      responseTime: "< 2 hours",
      team: "CISO, HR, Legal",
    },
    {
      icon: <Skull className="text-white" />,
      title: "Zero Day Exploit",
      severity: "CRITICAL",
      severityColor: "bg-gradient-to-r from-cyber-red to-red-600",
      bgColor: "bg-gradient-to-br from-cyber-red to-red-600",
      hoverColor: "hover:border-cyber-red",
      buttonColor: "bg-gradient-to-r from-cyber-red to-red-600 hover:from-red-600 hover:to-red-700",
      description: "Emergency response for unknown vulnerability exploitation",
      responseTime: "< 5 min",
      team: "Elite SOC, CISO",
    },
  ];

  return (
    <section className="py-16 bg-cyber-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-cyber-red">Incident Response</span>{" "}
            <span className="text-white">& Playbooks</span>
          </h2>
          <p className="text-cyber-gray max-w-2xl mx-auto">
            Ready-to-use incident response playbooks and automated workflows for rapid threat containment and investigation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playbooks.map((playbook, index) => (
            <div
              key={index}
              className={`glassmorphism rounded-lg p-6 ${playbook.hoverColor} transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${playbook.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                  {playbook.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{playbook.title}</h3>
                  <span className={`text-xs ${playbook.severityColor} text-white px-2 py-1 rounded`}>
                    {playbook.severity}
                  </span>
                </div>
              </div>
              <p className="text-cyber-gray text-sm mb-4">{playbook.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Clock className={`w-4 h-4 mr-2`} style={{ color: playbook.bgColor.includes('bg-') ? 'inherit' : playbook.bgColor }} />
                  <span>Response Time: {playbook.responseTime}</span>
                </div>
                <div className="flex items-center">
                  <Users className={`w-4 h-4 mr-2`} style={{ color: playbook.bgColor.includes('bg-') ? 'inherit' : playbook.bgColor }} />
                  <span>Team: {playbook.team}</span>
                </div>
              </div>
              <Button className={`mt-4 w-full ${playbook.buttonColor} text-white transition-all duration-300`}>
                <Play className="w-4 h-4 mr-2" />
                Execute Playbook
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
