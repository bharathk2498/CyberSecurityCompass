import { Sprout, Settings, Crown, Flame } from "lucide-react";

export default function CareerProgression() {
  const careerStages = [
    {
      level: "Entry Level (0-2 years)",
      icon: <Sprout className="text-cyber-dark text-xl" />,
      bgColor: "bg-cyber-green",
      description: "Building foundational security knowledge",
      skills: ["CompTIA Security+", "Network Fundamentals", "Basic Incident Response", "Security Awareness"],
      roles: "SOC Analyst I, Security Analyst, IT Support",
      salary: "$45,000 - $65,000",
      salaryColor: "text-cyber-green",
      side: "left",
    },
    {
      level: "Mid Level (2-5 years)",
      icon: <Settings className="text-white text-xl" />,
      bgColor: "bg-cyber-blue",
      description: "Specialized security skills and certifications",
      skills: ["CISSP / CEH", "Cloud Security (AWS/Azure)", "Threat Hunting", "Incident Response"],
      roles: "SOC Analyst II, Security Engineer, Pentester",
      salary: "$65,000 - $95,000",
      salaryColor: "text-cyber-blue",
      side: "right",
    },
    {
      level: "Senior Level (5-10 years)",
      icon: <Crown className="text-cyber-dark text-xl" />,
      bgColor: "bg-yellow-500",
      description: "Leadership and advanced technical expertise",
      skills: ["CISSP / CISM", "Security Architecture", "Team Leadership", "Risk Management"],
      roles: "Security Architect, SOC Manager, Lead Engineer",
      salary: "$95,000 - $140,000",
      salaryColor: "text-yellow-500",
      side: "left",
    },
    {
      level: "Elite Level (10+ years)",
      icon: <Flame className="text-white text-xl" />,
      bgColor: "bg-red-500",
      description: "Strategic leadership and industry expertise",
      skills: ["Executive Leadership", "Strategic Planning", "Board Communication", "Industry Thought Leadership"],
      roles: "CISO, Security Director, Principal Architect",
      salary: "$140,000 - $300,000+",
      salaryColor: "text-red-500",
      side: "right",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-white">Career</span>{" "}
            <span className="text-cyber-green">Progression Path</span>
          </h2>
          <p className="text-cyber-gray max-w-2xl mx-auto">
            Structured learning paths and skill development roadmaps for cybersecurity career advancement.
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyber-green via-cyber-blue via-yellow-500 to-red-500"></div>
          
          {/* Career Stages */}
          <div className="space-y-16">
            {careerStages.map((stage, index) => (
              <div key={index} className="flex items-center">
                {stage.side === "left" ? (
                  <>
                    <div className="w-1/2 pr-8 text-right">
                      <div className="glassmorphism rounded-lg p-6">
                        <h3 className={`text-xl font-bold mb-2 ${stage.salaryColor}`}>
                          {stage.level}
                        </h3>
                        <p className="text-cyber-gray text-sm mb-4">{stage.description}</p>
                        <ul className="text-sm space-y-1 text-left">
                          {stage.skills.map((skill, skillIndex) => (
                            <li key={skillIndex}>• {skill}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className={`w-16 h-16 ${stage.bgColor} rounded-full flex items-center justify-center relative z-10`}>
                      {stage.icon}
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="text-sm text-cyber-gray">
                        <div className="font-bold text-white mb-2">Typical Roles:</div>
                        <div>{stage.roles}</div>
                        <div className="font-bold text-white mt-2 mb-2">Average Salary:</div>
                        <div className={stage.salaryColor}>{stage.salary}</div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 pr-8 text-right">
                      <div className="text-sm text-cyber-gray">
                        <div className="font-bold text-white mb-2">Typical Roles:</div>
                        <div>{stage.roles}</div>
                        <div className="font-bold text-white mt-2 mb-2">Average Salary:</div>
                        <div className={stage.salaryColor}>{stage.salary}</div>
                      </div>
                    </div>
                    <div className={`w-16 h-16 ${stage.bgColor} rounded-full flex items-center justify-center relative z-10`}>
                      {stage.icon}
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="glassmorphism rounded-lg p-6">
                        <h3 className={`text-xl font-bold mb-2 ${stage.salaryColor}`}>
                          {stage.level}
                        </h3>
                        <p className="text-cyber-gray text-sm mb-4">{stage.description}</p>
                        <ul className="text-sm space-y-1">
                          {stage.skills.map((skill, skillIndex) => (
                            <li key={skillIndex}>• {skill}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
