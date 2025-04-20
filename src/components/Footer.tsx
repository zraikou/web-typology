
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-12 mt-auto border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Archetype</h3>
            <p className="text-sm text-muted-foreground">
              Professional personality assessment based on the MBTI framework.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                About MBTI
              </Link>
              <Link to="/quiz" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Take the Test
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
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
        <div className="mt-8 pt-4 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Archetype. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
