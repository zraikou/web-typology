
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AboutContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      <section className="space-y-4 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold gradient-text">About the MBTI Assessment</h1>
        <p className="text-lg text-muted-foreground">
          The Myers-Briggs Type Indicator (MBTI) is a self-report questionnaire designed to identify a person's personality type, strengths, and preferences.
        </p>
      </section>

      <section className="space-y-6 animate-fade-in [animation-delay:200ms]">
        <h2 className="text-2xl font-semibold">The Four Dimensions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle>Extraversion (E) vs. Introversion (I)</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                How you focus your attention and get energy—from the outer world of people and activity or your inner world of ideas and experiences.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="glass">
            <CardHeader>
              <CardTitle>Sensing (S) vs. Intuition (N)</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                How you take in information—focusing on what's real and actual or on patterns and meanings in data.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="glass">
            <CardHeader>
              <CardTitle>Thinking (T) vs. Feeling (F)</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                How you make decisions—based on objective logic and consistency or on values and people-centered concerns.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="glass">
            <CardHeader>
              <CardTitle>Judging (J) vs. Perceiving (P)</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                How you approach the outside world—in a structured, decided way or in a flexible, spontaneous way.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4 animate-fade-in [animation-delay:400ms]">
        <h2 className="text-2xl font-semibold">The 16 Personality Types</h2>
        <p className="text-muted-foreground">
          The MBTI assessment classifies people into one of 16 personality types, based on combinations of the four dimensions. Each type has its own characteristic strengths, preferences, and potential areas for growth.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-6">
          {['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP', 'ESTP', 'ESFP', 'ENFP', 'ENTP', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'].map((type) => (
            <div key={type} className="glass p-4 text-center rounded-md hover:shadow-lg transition-shadow">
              <p className="font-semibold">{type}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
