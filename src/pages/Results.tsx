
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResultsChart from '@/components/ResultsChart';
import { personalityTypes } from '@/data/quizData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ResultsState {
  type: string;
  percentages: {
    E: number;
    I: number;
    S: number;
    N: number;
    T: number;
    F: number;
    J: number;
    P: number;
  };
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results as ResultsState;
  
  useEffect(() => {
    if (!results) {
      navigate('/quiz');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results]);
  
  if (!results) {
    return null; // Will redirect from useEffect
  }
  
  const personalityData = personalityTypes[results.type] || {
    type: results.type,
    name: "Unknown Type",
    description: "We couldn't find detailed information about this personality type.",
    strengths: [],
    weaknesses: []
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4">
        <div className="container max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2">Your Personality Type</h1>
            <p className="text-muted-foreground">Based on your responses to our MBTI assessment</p>
          </div>
          
          <Card className="glass mb-8">
            <CardHeader className="text-center border-b border-border/20 pb-6">
              <CardTitle className="text-5xl font-bold gradient-text">{personalityData.type}</CardTitle>
              <CardDescription className="text-xl mt-2">{personalityData.name}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-lg mb-8">{personalityData.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Strengths</h3>
                  <ul className="space-y-2">
                    {personalityData.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-mbti-purple mr-2">•</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Growth Areas</h3>
                  <ul className="space-y-2">
                    {personalityData.weaknesses.map((weakness, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-mbti-teal mr-2">•</span>
                        <span>{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass mb-8">
            <CardHeader>
              <CardTitle>Dimension Breakdown</CardTitle>
              <CardDescription>See how you scored across each personality dimension</CardDescription>
            </CardHeader>
            <CardContent>
              <ResultsChart results={results.percentages} />
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-12">
            <Button 
              onClick={() => navigate('/quiz')} 
              variant="outline" 
              className="glass mr-4"
            >
              Retake Quiz
            </Button>
            <Button 
              onClick={() => navigate('/')} 
              className="gradient-bg"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Results;
