'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Exams() {
  const [availableExams] = useState([
    {
      id: 1,
      name: 'Mathematics Final',
      subject: 'Mathematics',
      duration: '2 hours',
      questions: 50,
      date: '2023-12-15',
    },
    {
      id: 2,
      name: 'Physics Midterm',
      subject: 'Physics',
      duration: '1.5 hours',
      questions: 40,
      date: '2023-12-20',
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Available Exams</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableExams.map((exam) => (
          <div key={exam.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{exam.name}</h2>
              <div className="space-y-2 text-gray-600 mb-4">
                <p>Subject: {exam.subject}</p>
                <p>Duration: {exam.duration}</p>
                <p>Questions: {exam.questions}</p>
                <p>Date: {exam.date}</p>
              </div>
              <Link 
                href={`/exams/${exam.id}`}
                className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700"
              >
                Start Exam
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}