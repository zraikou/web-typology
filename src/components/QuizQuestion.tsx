
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { QuizQuestion as QuizQuestionType } from '@/data/quizData';

interface QuestionProps {
  question: QuizQuestionType;
  selectedOption: string | null;
  onSelect: (optionId: string) => void;
  onNext: () => void;
}

const QuizQuestion = ({ question, selectedOption, onSelect, onNext }: QuestionProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto animate-scale-in">
      <Card className="glass">
        <CardContent className="pt-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold mb-2">{question.text}</h2>
          </div>
          
          <RadioGroup value={selectedOption || ''} onValueChange={onSelect} className="space-y-4">
            {question.options.map((option) => (
              <div key={option.id} className="flex items-center space-x-3 p-3 rounded-md transition-colors hover:bg-white/30">
                <RadioGroupItem value={option.id} id={option.id} className="border-primary/30" />
                <Label htmlFor={option.id} className="font-medium cursor-pointer flex-grow">
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
          
          <div className="flex justify-end mt-8">
            <Button 
              onClick={onNext} 
              disabled={!selectedOption} 
              className={`gradient-bg px-8 ${!selectedOption ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}`}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizQuestion;
