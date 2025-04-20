
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Gamepad, Puzzle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center px-4 md:px-12 py-24">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="flex justify-center mb-4">
          <Puzzle className="w-16 h-16 text-mbti-purple animate-pulse-soft" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
          Discover Your <span className="gradient-text">Personality Type</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
          Who you are is waiting to be defined. What does ‘you’ really mean? 
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in [animation-delay:400ms]">
          <Button size="lg" className="glass gradient-bg text-white group">
            <Link to="/quiz" className="flex items-center gap-2">
              Start
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="glass">
            <Link to="/about">How to Use</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-transparent to-background pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-mbti-purple/10 blur-3xl -z-10 animate-pulse-soft"></div>
      <div className="absolute top-1/3 left-1/4 w-[25rem] h-[25rem] rounded-full bg-mbti-blue/10 blur-3xl -z-10 animate-pulse-soft [animation-delay:1s]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[20rem] h-[20rem] rounded-full bg-mbti-teal/10 blur-3xl -z-10 animate-pulse-soft [animation-delay:2s]"></div>
    </section>
  );
};

export default Hero;
