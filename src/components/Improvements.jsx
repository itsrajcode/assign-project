import React from 'react';
import { ChartNoAxesCombinedIcon } from 'lucide-react';

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
    <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <ChartNoAxesCombinedIcon className="w-5 h-5 text-gray-400" />
        <h2 className="text-lg font-medium text-gray-400">Improvements</h2>
      </div>
      
      <div className="mt-3">
        <h3 className="text-base text-gray-600 font-semibold mb-3">Subject Understanding</h3>
        <div className="flex flex-wrap gap-1">
          {subjects.map((subject, index) => (
            <span
              key={index}
              className={`${subject.color} text-white px-2 py-1 rounded-full text-xs`}
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