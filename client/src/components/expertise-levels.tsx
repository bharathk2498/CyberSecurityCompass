import { Sprout, Settings, Crown, Flame, Check } from "lucide-react";

export default function ExpertiseLevels() {
  const levels = [
    {
      icon: <Sprout className="text-2xl" />,
      title: "Entry Level",
      color: "cyber-green",
      bgColor: "from-cyber-green to-cyber-green-dim",
      textColor: "text-cyber-green",
      description: "Fundamentals, basic tools, and getting started guides",
      skills: ["Security Fundamentals", "Basic Network Security", "Introduction to Cloud"],
    },
    {
      icon: <Settings className="text-2xl text-white" />,
      title: "Mid Level",
      color: "cyber-blue",
      bgColor: "from-cyber-blue to-cyber-blue-light",
      textColor: "text-cyber-blue",
      description: "Advanced tools, incident response, and threat hunting",
      skills: ["Threat Detection", "Incident Response", "Security Automation"],
    },
    {
      icon: <Crown className="text-2xl text-cyber-dark" />,
      title: "Senior Level",
      color: "yellow-500",
      bgColor: "from-yellow-500 to-yellow-400",
      textColor: "text-yellow-500",
      description: "Architecture, advanced threats, and team leadership",
      skills: ["Security Architecture", "Advanced Threat Hunting", "Risk Management"],
    },
    {
      icon: <Flame className="text-2xl text-white" />,
      title: "Elite Level",
      color: "red-500",
      bgColor: "from-red-500 to-red-400",
      textColor: "text-red-500",
      description: "Research, zero-days, and strategic leadership",
      skills: ["Zero-Day Research", "Strategic Planning", "Executive Briefings"],
    },
  ];

  return (
    <section className="py-12 bg-cyber-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-cyber-green">Choose Your</span>{" "}
          <span className="text-white">Expertise Level</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level, index) => (
            <div
              key={index}
              className="glassmorphism rounded-lg p-6 hover:border-current transition-all duration-300 cursor-pointer group"
              style={{ borderColor: `var(--${level.color})` }}
            >
              <div className="text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${level.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-green`}
                >
                  {level.icon}
                </div>
                <h3 className={`text-xl font-bold ${level.textColor} mb-2`}>
                  {level.title}
                </h3>
                <p className="text-cyber-gray text-sm mb-4">{level.description}</p>
                <div className="space-y-2 text-sm text-left">
                  {level.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <Check className={`${level.textColor} w-4 h-4 mr-2`} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
