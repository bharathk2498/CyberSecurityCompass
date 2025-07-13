import { Network, Search, Bug, Code, Lock, Cloud, Copy, ExternalLink, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SecurityTools() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const toolCategories = [
    { icon: <Network className="text-cyber-green text-2xl" />, name: "Network", color: "hover:border-cyber-green" },
    { icon: <Search className="text-cyber-blue text-2xl" />, name: "OSINT", color: "hover:border-cyber-blue" },
    { icon: <Bug className="text-red-500 text-2xl" />, name: "Exploit", color: "hover:border-red-500" },
    { icon: <Code className="text-yellow-500 text-2xl" />, name: "Analysis", color: "hover:border-yellow-500" },
    { icon: <Lock className="text-purple-500 text-2xl" />, name: "Crypto", color: "hover:border-purple-500" },
    { icon: <Cloud className="text-green-500 text-2xl" />, name: "Cloud", color: "hover:border-green-500" },
  ];

  const featuredTools = [
    {
      icon: <Network className="text-cyber-dark" />,
      title: "Nmap",
      description: "Network Discovery",
      command: "nmap -sS -A -T4 target",
      comment: "# Stealth SYN scan with OS detection",
      bgColor: "bg-cyber-green",
      textColor: "text-cyber-green",
      tag: "ESSENTIAL",
      tagBg: "bg-cyber-green",
      actionIcon: <Copy className="w-4 h-4" />,
    },
    {
      icon: <Bug className="text-white" />,
      title: "Burp Suite",
      description: "Web Application Security",
      command: "java -jar burpsuite.jar",
      comment: "# Professional web security testing",
      bgColor: "bg-orange-500",
      textColor: "text-orange-500",
      tag: "WEB",
      tagBg: "bg-orange-500",
      actionIcon: <ExternalLink className="w-4 h-4" />,
    },
    {
      icon: <Terminal className="text-white" />,
      title: "Metasploit",
      description: "Exploitation Framework",
      command: "msfconsole",
      comment: "# Advanced exploitation framework",
      bgColor: "bg-red-500",
      textColor: "text-red-500",
      tag: "EXPLOIT",
      tagBg: "bg-red-500",
      actionIcon: <Terminal className="w-4 h-4" />,
    },
  ];

  const handleCopy = (index: number, command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-16 bg-cyber-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-cyber-blue">Security Tools</span>{" "}
            <span className="text-white">Library</span>
          </h2>
          <p className="text-cyber-gray max-w-2xl mx-auto">
            Comprehensive collection of cybersecurity tools, commands, and configurations for every security professional.
          </p>
        </div>

        {/* Tool Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {toolCategories.map((category, index) => (
            <button
              key={index}
              className={`glassmorphism rounded-lg p-4 text-center ${category.color} transition-all duration-300`}
            >
              {category.icon}
              <div className="text-sm text-white mt-2">{category.name}</div>
            </button>
          ))}
        </div>

        {/* Featured Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool, index) => (
            <div key={index} className="glassmorphism rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${tool.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{tool.title}</h3>
                  <p className="text-cyber-gray text-sm">{tool.description}</p>
                </div>
              </div>
              <div className="bg-cyber-dark rounded p-3 font-mono text-sm mb-4">
                <div className={tool.textColor}>{tool.command}</div>
                <div className="text-cyber-gray">{tool.comment}</div>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-xs ${tool.tagBg} text-cyber-dark px-2 py-1 rounded`}>
                  {tool.tag}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`${tool.textColor} hover:${tool.textColor.replace('text-', 'bg-')}/10`}
                  onClick={() => handleCopy(index, tool.command)}
                >
                  {copiedIndex === index ? "✓" : tool.actionIcon}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
