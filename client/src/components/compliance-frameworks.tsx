import { Shield, Award, Eye, CreditCard } from "lucide-react";

export default function ComplianceFrameworks() {
  const frameworks = [
    {
      icon: <Shield className="text-cyber-dark text-2xl" />,
      title: "NIST CSF",
      description: "Cybersecurity Framework",
      bgColor: "bg-cyber-green",
      hoverColor: "hover:border-cyber-green",
      requirements: [
        { name: "Identify", percentage: 98 },
        { name: "Protect", percentage: 94 },
        { name: "Detect", percentage: 87 },
        { name: "Respond", percentage: 92 },
        { name: "Recover", percentage: 85 },
      ],
    },
    {
      icon: <Award className="text-white text-2xl" />,
      title: "ISO 27001",
      description: "Information Security",
      bgColor: "bg-cyber-blue",
      hoverColor: "hover:border-cyber-blue",
      requirements: [
        { name: "Controls", value: "114/114" },
        { name: "Compliance", percentage: 96 },
        { name: "Audit Ready", value: "✓" },
      ],
    },
    {
      icon: <Eye className="text-white text-2xl" />,
      title: "SOC 2",
      description: "Trust Services",
      bgColor: "bg-purple-500",
      hoverColor: "hover:border-purple-500",
      requirements: [
        { name: "Security", value: "✓" },
        { name: "Availability", value: "✓" },
        { name: "Confidentiality", value: "○" },
        { name: "Processing", value: "✓" },
        { name: "Privacy", value: "✓" },
      ],
    },
    {
      icon: <CreditCard className="text-white text-2xl" />,
      title: "PCI DSS",
      description: "Payment Card Industry",
      bgColor: "bg-red-500",
      hoverColor: "hover:border-red-500",
      requirements: [
        { name: "Requirements", value: "12/12" },
        { name: "Level", value: "Level 1" },
        { name: "Status", value: "Compliant" },
      ],
    },
  ];

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 90) return "text-cyber-green";
    if (percentage >= 80) return "text-yellow-500";
    return "text-cyber-red";
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-white">Compliance</span>{" "}
            <span className="text-cyber-green">Frameworks</span>
          </h2>
          <p className="text-cyber-gray max-w-2xl mx-auto">
            Comprehensive compliance mapping and assessment tools for major security frameworks and regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {frameworks.map((framework, index) => (
            <div
              key={index}
              className={`glassmorphism rounded-lg p-6 text-center ${framework.hoverColor} transition-all duration-300`}
            >
              <div className={`w-16 h-16 ${framework.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                {framework.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{framework.title}</h3>
              <p className="text-cyber-gray text-sm mb-4">{framework.description}</p>
              <div className="space-y-2 text-sm">
                {framework.requirements.map((req, reqIndex) => (
                  <div key={reqIndex} className="flex justify-between">
                    <span>{req.name}</span>
                    <span className={req.percentage ? getPercentageColor(req.percentage) : "text-cyber-green"}>
                      {req.percentage ? `${req.percentage}%` : req.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Progress Bar */}
        <div className="mt-12 glassmorphism rounded-lg p-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Overall Compliance Score</h3>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyber-green mb-2">94%</div>
              <div className="text-cyber-gray text-sm">Security Posture</div>
            </div>
            <div className="w-48 bg-cyber-border rounded-full h-4">
              <div
                className="bg-gradient-to-r from-cyber-green to-cyber-green-dim h-4 rounded-full"
                style={{ width: "94%" }}
              ></div>
            </div>
            <div className="text-center">
              <div className="text-cyber-green text-xl font-bold mb-2">Excellent</div>
              <div className="text-cyber-gray text-sm">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
