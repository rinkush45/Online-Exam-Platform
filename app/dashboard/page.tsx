'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [upcomingExams] = useState([
    { id: 1, name: 'Mathematics Final', date: '2023-12-15', duration: '2 hours' },
    { id: 2, name: 'Physics Midterm', date: '2023-12-20', duration: '1.5 hours' },
  ]);

  const [completedExams] = useState([
    { id: 1, name: 'Chemistry Quiz', date: '2023-11-30', score: '85%' },
    { id: 2, name: 'Biology Test', date: '2023-11-25', score: '92%' },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Exams */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Exams</h2>
          <div className="space-y-4">
            {upcomingExams.map((exam) => (
              <div key={exam.id} className="border-b pb-4">
                <h3 className="font-semibold">{exam.name}</h3>
                <p className="text-gray-600">Date: {exam.date}</p>
                <p className="text-gray-600">Duration: {exam.duration}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Exams */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Completed Exams</h2>
          <div className="space-y-4">
            {completedExams.map((exam) => (
              <div key={exam.id} className="border-b pb-4">
                <h3 className="font-semibold">{exam.name}</h3>
                <p className="text-gray-600">Date: {exam.date}</p>
                <p className="text-green-600 font-semibold">Score: {exam.score}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}