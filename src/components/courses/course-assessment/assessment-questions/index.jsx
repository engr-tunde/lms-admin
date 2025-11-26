import { useState } from "react";
import { EditIcon, GripIcon, ChevronDownIcon, PlusIcon, TrashIcon } from "../../../globals/Icons"

const AssessmentQuestions = () => {
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

  const addQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      type: 'multiple-choice',
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      points: 10
    };
    setQuestions([...questions, newQuestion]);
  };

  return (
    <div className="space-y-6">
      {questions.map((q, index) => (
        <div key={q.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-start gap-4">
            <button className="mt-1 text-gray-400 hover:text-gray-600 cursor-move">
              <GripIcon className="w-5 h-5" />
            </button>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Question {index + 1}</h3>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <EditIcon className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center gap-2">
                    <TrashIcon className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Question
                  </label>
                  <input
                    type="text"
                    value={q.question}
                    placeholder="Enter your question"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Question Type
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none bg-white">
                        <option>Multiple Choice</option>
                        <option>True/False</option>
                        <option>Short Answer</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Points
                    </label>
                    <input
                      type="number"
                      value={q.points}
                      placeholder="10"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Answer Options
                  </label>
                  <div className="space-y-2">
                    {q.options.map((option, optIndex) => (
                      <div key={optIndex} className="flex gap-3">
                        <input
                          type="radio"
                          name={`correct-${q.id}`}
                          checked={q.correctAnswer === optIndex}
                          className="w-5 h-5 text-emerald-600 mt-3"
                        />
                        <input
                          type="text"
                          value={option}
                          placeholder={`Option ${optIndex + 1}`}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Select the radio button for the correct answer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addQuestion}
        className="w-full px-6 py-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 font-medium hover:border-purple-400 hover:text-purple-600 transition-colors flex items-center justify-center gap-2"
      >
        <PlusIcon className="w-5 h-5" />
        Add New Question
      </button>

      <div className="flex justify-between mt-8">
        <button 
          onClick={() => setActiveTab('settings')}
          className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          ← Back to Settings
        </button>
        <button 
          onClick={() => setActiveTab('preview')}
          className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          Continue to Preview →
        </button>
      </div>
    </div>
  )
}

export default AssessmentQuestions;