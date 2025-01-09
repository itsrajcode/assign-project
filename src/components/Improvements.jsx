import React from 'react';
import { Zap } from 'lucide-react';

const SubjectImprovements = () => {
  const subjects = [
    { name: 'Geography', color: 'bg-teal-500' },
    { name: 'Politics', color: 'bg-yellow-500' },
    { name: 'Current Affairs', color: 'bg-teal-500' },
    { name: 'General Studies', color: 'bg-red-600' },
    { name: 'Mathematics', color: 'bg-teal-500' },
    { name: 'Social Studies', color: 'bg-gray-400' },
    { name: 'English Literature', color: 'bg-red-600' },
    { name: 'Indian History', color: 'bg-yellow-500' },
    { name: 'Economics', color: 'bg-teal-500' }
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-5 h-5 text-gray-600" />
        <h2 className="text-lg font-medium text-gray-700">Improvements</h2>
      </div>
      
      <div className="mt-3">
        <h3 className="text-base font-medium text-gray-600 mb-3">Subject Understanding</h3>
        <div className="flex flex-wrap gap-2">
          {subjects.map((subject, index) => (
            <span
              key={index}
              className={`${subject.color} text-white px-3 py-1 rounded-full text-sm`}
            >
              {subject.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectImprovements;