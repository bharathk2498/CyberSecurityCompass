import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyber-gray w-5 h-5" />
        <Input
          type="text"
          placeholder="Search threats, tools, playbooks, compliance frameworks..."
          className="w-full bg-cyber-card border border-cyber-border rounded-lg py-4 px-6 pl-12 text-white placeholder-cyber-gray focus:border-cyber-green focus:outline-none focus:ring-2 focus:ring-cyber-green/20"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyber-green hover:text-cyber-green-dim"
        >
          <Filter className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
