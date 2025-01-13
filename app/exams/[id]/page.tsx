'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Mock data - in a real app, this would come from an API or database
const examData = {
  1: {
    id: 1,
    name: 'Mathematics Final',
    questions: [
      {
        id: 1,
        text: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 1
      },
      {
        id: 2,
        text: 'What is 5 × 5?',
        options: ['20', '25', '30', '35'],
        correctAnswer: 1
      }
    ]
  },
  2: {
    id: 2,
    name: 'Physics Midterm',
    questions: [
      {
        id: 1,
        text: 'What is the unit of force?',
        options: ['Watt', 'Newton', 'Joule', 'Pascal'],
        correctAnswer: 1
      },
      {
        id: 2,
        text: 'What is the speed of light?',
        options: ['299,792 km/s', '300,000 km/s', '299,792,458 m/s', '300,000,000 m/s'],
        correctAnswer: 2
      }
    ]
  }
};

export default function ExamPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours in seconds
  const [exam, setExam] = useState<any>(null);

  useEffect(() => {
    // Get exam data based on ID
    const examId = params.id;
    const currentExam = examData[examId as keyof typeof examData];
    
    if (!currentExam) {
      router.push('/exams');
      return;
    }
    
    setExam(currentExam);
  }, [params.id, router]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!exam) {
    return <div className="p-8 text-center">Loading exam...</div>;
  }

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < exam.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    router.push('/dashboard');
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const question = exam.questions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{exam.name}</h1>
          <div className="text-xl font-semibold text-blue-600">
            Time Left: {formatTime(timeLeft)}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl mb-4">
            Question {currentQuestion + 1} of {exam.questions.length}
          </h2>
          <p className="text-lg mb-4">{question.text}</p>
          
          <div className="space-y-4">
            {question.options.map((option: string, index: number) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="answer"
                  className="h-4 w-4 text-blue-600"
                  checked={answers[currentQuestion] === index}
                  onChange={() => handleAnswer(index)}
                />
                <label htmlFor={`option-${index}`} className="ml-2">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          
          {currentQuestion === exam.questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}