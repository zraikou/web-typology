
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center animate-fade-in">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold gradient-text">Archetype</Link>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
          Home
        </Link>
        <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
          About MBTI
        </Link>
        <Button variant="outline" className="glass hover:bg-white/80 transition-all duration-300">
          <Link to="/quiz">Take the Test</Link>
        </Button>
      </nav>
      <Button variant="outline" className="md:hidden glass hover:bg-white/80 transition-all duration-300">
        <Link to="/quiz">Start</Link>
      </Button>
    </header>
  );
};

export default Header;
