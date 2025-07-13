import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CloudSecurity() {
  const cloudProviders = [
    {
      name: "AWS Security",
      provider: "Amazon Web Services",
      icon: "🟠",
      bgColor: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
      services: [
        { name: "IAM Policies", status: "online" },
        { name: "GuardDuty", status: "online" },
        { name: "CloudTrail", status: "warning" },
        { name: "Security Hub", status: "online" },
      ],
    },
    {
      name: "Azure Security",
      provider: "Microsoft Azure",
      icon: "🔵",
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      services: [
        { name: "Security Center", status: "online" },
        { name: "Sentinel", status: "online" },
        { name: "Key Vault", status: "online" },
        { name: "Azure AD", status: "critical" },
      ],
    },
    {
      name: "GCP Security",
      provider: "Google Cloud Platform",
      icon: "🟢",
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      services: [
        { name: "Security Command", status: "online" },
        { name: "Cloud IAM", status: "online" },
        { name: "Cloud Armor", status: "online" },
        { name: "Binary Authorization", status: "warning" },
      ],
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case "online":
        return "status-online";
      case "warning":
        return "status-warning";
      case "critical":
        return "status-critical";
      default:
        return "text-cyber-gray";
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-white">Multi-Cloud</span>{" "}
            <span className="text-cyber-blue">Security Operations</span>
          </h2>
          <p className="text-cyber-gray max-w-2xl mx-auto">
            Comprehensive security coverage for AWS, Azure, and Google Cloud Platform with real-time monitoring and threat intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {cloudProviders.map((provider, index) => (
            <div key={index} className="glassmorphism rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${provider.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                  <span className="text-white text-xl">{provider.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{provider.name}</h3>
                  <p className="text-cyber-gray text-sm">{provider.provider}</p>
                </div>
              </div>
              <div className="space-y-3">
                {provider.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex justify-between items-center">
                    <span className="text-sm">{service.name}</span>
                    <span className={getStatusClass(service.status)}>●</span>
                  </div>
                ))}
              </div>
              <Button className={`mt-4 w-full ${provider.bgColor} ${provider.hoverColor} text-white`}>
                <ExternalLink className="w-4 h-4 mr-2" />
                Open {provider.name.split(" ")[0]} Console
              </Button>
            </div>
          ))}
        </div>

        {/* Terminal Command Reference */}
        <div className="terminal-window rounded-lg p-6 font-mono">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="ml-4 text-cyber-green text-sm">security@ops:~$</span>
          </div>
          <div className="text-sm space-y-2">
            <div className="text-cyber-green">
              <span className="text-cyber-gray"># AWS Security Commands</span><br />
              aws iam list-users --output table<br />
              aws guardduty list-detectors<br />
              aws cloudtrail describe-trails
            </div>
            <div className="text-cyber-blue">
              <span className="text-cyber-gray"># Azure Security Commands</span><br />
              az security contact list<br />
              az keyvault list<br />
              az ad user list --output table
            </div>
            <div className="text-green-400">
              <span className="text-cyber-gray"># GCP Security Commands</span><br />
              gcloud security marks list<br />
              gcloud iam service-accounts list<br />
              gcloud armor policies list
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
