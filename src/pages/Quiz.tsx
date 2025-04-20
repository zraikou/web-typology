
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import QuizQuestion from '@/components/QuizQuestion';
import { quizQuestions } from '@/data/quizData';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});
  
  const currentQuestion = quizQuestions[currentQuestionIndex];
  
  const handleOptionSelect = (optionId: string) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestion.id]: optionId
    });
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate results and redirect to results page
      const results = calculateResults();
      navigate('/results', { state: { results } });
    }
  };
  
  const calculateResults = () => {
    const dimensionCounts = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0
    };
    
    // Count selections for each dimension
    Object.keys(selectedOptions).forEach(questionIdStr => {
      const questionId = parseInt(questionIdStr);
      const optionId = selectedOptions[questionId];
      const question = quizQuestions.find(q => q.id === questionId);
      const selectedOption = question?.options.find(o => o.id === optionId);
      
      if (selectedOption) {
        dimensionCounts[selectedOption.dimension]++;
      }
    });
    
    // Calculate percentages and determine type
    const total = {
      EI: dimensionCounts.E + dimensionCounts.I,
      SN: dimensionCounts.S + dimensionCounts.N,
      TF: dimensionCounts.T + dimensionCounts.F,
      JP: dimensionCounts.J + dimensionCounts.P
    };
    
    const percentages = {
      E: (dimensionCounts.E / total.EI) * 100 || 0,
      I: (dimensionCounts.I / total.EI) * 100 || 0,
      S: (dimensionCounts.S / total.SN) * 100 || 0,
      N: (dimensionCounts.N / total.SN) * 100 || 0,
      T: (dimensionCounts.T / total.TF) * 100 || 0,
      F: (dimensionCounts.F / total.TF) * 100 || 0,
      J: (dimensionCounts.J / total.JP) * 100 || 0,
      P: (dimensionCounts.P / total.JP) * 100 || 0
    };
    
    const type = 
      (percentages.I > percentages.E ? 'I' : 'E') +
      (percentages.N > percentages.S ? 'N' : 'S') +
      (percentages.F > percentages.T ? 'F' : 'T') +
      (percentages.P > percentages.J ? 'P' : 'J');
    
    return {
      type,
      percentages
    };
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4">
        <div className="container max-w-4xl">
          <ProgressBar current={currentQuestionIndex + 1} total={quizQuestions.length} />
          
          <QuizQuestion 
            question={currentQuestion} 
            selectedOption={selectedOptions[currentQuestion.id] || null} 
            onSelect={handleOptionSelect} 
            onNext={handleNext} 
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;
