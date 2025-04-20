
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-12 mt-auto border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Personality Quest</h3>
            <p className="text-sm text-muted-foreground">
              A fun personality quiz game to discover your true type!
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                How to Play
              </Link>
              <Link to="/quiz" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Start Game
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">About</h4>
            <div className="space-y-2">
              <Link to="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Personality Quest. All rights reserved.</p>
          <p className="text-xs text-muted-foreground mt-2">Created by John Rico B. Tolentino</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
