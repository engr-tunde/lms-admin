import { AlertCircleIcon, AwardIcon } from "../../../globals/Icons"
import { useState } from "react";

function AssessmentPublish() {
  const [activeTab, setActiveTab] = useState('settings');
  const [questions, setQuestions] = useState([
    {
      id: 1,
      type: 'multiple-choice',
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correctAnswer: 1,
      points: 10
    }
  ]);

  const [assessmentData, setAssessmentData] = useState({
    title: '',
    duration: '',
    passingScore: '',
    attempts: '1',
    shuffleQuestions: false,
    showResults: true
  });

  const tabs = [
    { id: 'settings', label: 'Assessment Settings', step: 1, completed: false },
    { id: 'questions', label: 'Questions', step: 2, completed: false },
    { id: 'preview', label: 'Preview & Publish', step: 3, completed: false }
  ];

  return (
    <div className="space-y-6">
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="flex items-start gap-3 mb-6">
        <AlertCircleIcon className="w-6 h-6 text-blue-600 mt-1" />
        <div>
            <h2 className="text-xl font-semibold text-gray-900">Assessment Summary</h2>
            <p className="text-gray-500 text-sm mt-1">Review your test before publishing</p>
        </div>
        </div>

        <div className="space-y-4 mb-6">
        <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Total Questions</span>
            <span className="font-semibold text-gray-900">{questions.length}</span>
        </div>
        <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Total Points</span>
            <span className="font-semibold text-gray-900">{questions.reduce((sum, q) => sum + q.points, 0)}</span>
        </div>
        <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Time Limit</span>
            <span className="font-semibold text-gray-900">{assessmentData.duration || 'Not set'} minutes</span>
        </div>
        <div className="flex justify-between py-3">
            <span className="text-gray-600">Passing Score</span>
            <span className="font-semibold text-gray-900">{assessmentData.passingScore || 'Not set'}%</span>
        </div>
        </div>

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg mb-6">
        <p className="text-sm text-amber-800">
            <strong>Note:</strong> Once published, students will be able to take this assessment. Make sure all questions and settings are correct.
        </p>
        </div>
    </div>

    <div className="flex justify-between">
        <button 
        onClick={() => setActiveTab('questions')}
        className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
        ← Back to Questions
        </button>
        <div className="flex gap-3">
        <button className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            Save as Draft
        </button>
        <button className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center gap-2">
            <AwardIcon className="w-4 h-4" />
            Publish Assessment
        </button>
        </div>
    </div>
    </div>
);
}

export default AssessmentPublish;