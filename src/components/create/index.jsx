// import { coursePriceValues } from "../../utils/initialValues";
// import { validateCoursePrice } from "../../utils/validate";
// import CustomModal from "../globals/Modals";
// import InputField from "../forms/InputField";
// import SelectField from "../forms/SelectField";

// const CoursePriceCard = () => {
//   const initialValues = coursePriceValues()
//   const validationSchema = validateCoursePrice()

//   return (
//   <div className="">
//       <CustomModal
//         onSubmit={() => console.log("submit")}
//         onDraft={() => console.log("draft")}
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         title="Add Course Price"
//         submitButtonTitle="Continue"
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//           <SelectField
//             name="currency"
//             title="-- Select Currency --"
//             array={currencyOptions}
//             colSpan={1}
//           />
//           <InputField
//             name="price"
//             placeholder="Enter the price for this course"
//             colSpan={1}
//           />
//         </div>
//       </CustomModal>
//   </div>
//   )
// }


// export const currencyOptions = [
//   { value: "USD", title: "US Dollar ($)" },
//   { value: "EUR", title: "Euro (€)" },
//   { value: "GBP", title: "British Pound (£)" },
//   { value: "NGN", title: "Nigerian Naira (₦)" },
//   { value: "GHS", title: "Ghanaian Cedi (₵)" },
//   { value: "KES", title: "Kenyan Shilling (KSh)" },
//   { value: "ZAR", title: "South African Rand (R)" },
//   { value: "XAF", title: "Central African CFA Franc (FCFA)" },
//   { value: "XOF", title: "West African CFA Franc (CFA)" },
//   { value: "CAD", title: "Canadian Dollar (C$)" },
//   { value: "AUD", title: "Australian Dollar (A$)" },
//   { value: "NZD", title: "New Zealand Dollar (NZ$)" },
//   { value: "CHF", title: "Swiss Franc (CHF)" },
//   { value: "JPY", title: "Japanese Yen (¥)" },
//   { value: "CNY", title: "Chinese Yuan (¥)" },
//   { value: "HKD", title: "Hong Kong Dollar (HK$)" },
//   { value: "SGD", title: "Singapore Dollar (S$)" },
//   { value: "INR", title: "Indian Rupee (₹)" },
//   { value: "AED", title: "UAE Dirham (AED)" },
//   { value: "SAR", title: "Saudi Riyal (SAR)" },
//   { value: "QAR", title: "Qatari Riyal (QAR)" },
//   { value: "KWD", title: "Kuwaiti Dinar (KWD)" },
//   { value: "BHD", title: "Bahraini Dinar (BHD)" },
//   { value: "BRL", title: "Brazilian Real (R$)" },
//   { value: "MXN", title: "Mexican Peso (MX$)" },
//   { value: "ARS", title: "Argentine Peso (ARS)" },
//   { value: "CLP", title: "Chilean Peso (CLP)" },
//   { value: "COP", title: "Colombian Peso (COP)" },
//   { value: "RUB", title: "Russian Ruble (₽)" },
//   { value: "TRY", title: "Turkish Lira (₺)" },
//   { value: "KRW", title: "South Korean Won (₩)" },
// ];


// export default CoursePriceCard;




import React, { useState } from 'react';
import { Check, ChevronDown, GripVertical, Edit2, Trash2, Plus, Video, FileText, Upload, DollarSign, Globe, Clock, Users, BookOpen, Award, AlertCircle, Eye } from 'lucide-react';

function CoursePriceCard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sections, setSections] = useState([
    {
      id: 1,
      title: 'Introduction to AI',
      description: 'Understand basic AI concepts',
      materials: 3
    }
  ]);

  const [courseData, setCourseData] = useState({
    price: '',
    currency: 'USD',
    isFree: false,
    hasDiscount: false,
    discountPrice: '',
    requirements: [''],
    targetAudience: [''],
    duration: '',
    certificateEnabled: true
  });

  const tabs = [
    { id: 'overview', label: 'Course Overview', step: 1, completed: false },
    { id: 'materials', label: 'Course Materials', step: 2, completed: false },
    { id: 'requirements', label: 'Requirements & Audience', step: 3, completed: false },
    { id: 'publish', label: 'Publish', step: 4, completed: false }
  ];

  const addRequirement = () => {
    setCourseData({
      ...courseData,
      requirements: [...courseData.requirements, '']
    });
  };

  const addTargetAudience = () => {
    setCourseData({
      ...courseData,
      targetAudience: [...courseData.targetAudience, '']
    });
  };

  const updateRequirement = (index, value) => {
    const newReqs = [...courseData.requirements];
    newReqs[index] = value;
    setCourseData({ ...courseData, requirements: newReqs });
  };

  const updateTargetAudience = (index, value) => {
    const newAudience = [...courseData.targetAudience];
    newAudience[index] = value;
    setCourseData({ ...courseData, targetAudience: newAudience });
  };

  const removeRequirement = (index) => {
    setCourseData({
      ...courseData,
      requirements: courseData.requirements.filter((_, i) => i !== index)
    });
  };

  const removeTargetAudience = (index) => {
    setCourseData({
      ...courseData,
      targetAudience: courseData.targetAudience.filter((_, i) => i !== index)
    });
  };

  const currentTabIndex = tabs.findIndex(t => t.id === activeTab);
  const progressPercentage = ((currentTabIndex + 1) / tabs.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <span className="cursor-pointer hover:text-gray-700">← Back</span>
            <span>/</span>
            <span>Overview</span>
            <span>/</span>
            <span className="text-gray-900">Overview Details</span>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">Create Course</h1>
          <p className="text-gray-500 mt-1">Choose the type of content you want to create</p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-8">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative pb-4 pt-6"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    tab.completed 
                      ? 'bg-emerald-500 text-white' 
                      : activeTab === tab.id 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                  }`}>
                    {tab.completed ? <Check className="w-4 h-4" /> : tab.step}
                  </div>
                  <span className={`font-medium transition-colors ${
                    activeTab === tab.id ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {tab.label}
                  </span>
                </div>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600" />
                )}
              </button>
            ))}
          </div>
        </div>
        {/* Progress Bar */}
        <div className="h-1 bg-gray-200">
          <div className="h-full bg-emerald-500 transition-all duration-300" style={{ width: `${progressPercentage}%` }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'overview' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Add Course Details</h2>
            
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Title
                </label>
                <input
                  type="text"
                  placeholder="Enter a title for this section"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Category and Language Row */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none bg-white">
                      <option>Pick category from the options below</option>
                      <option>Technology</option>
                      <option>Business</option>
                      <option>Design</option>
                      <option>Marketing</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Select the most relevant category</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Language of Instruction
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none bg-white">
                      <option>Pick Preferred Language of Instruction</option>
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Level and Learning Objectives */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Level
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none bg-white">
                      <option>-- Select Level --</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>All Levels</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Learning Objective
                  </label>
                  <input
                    type="text"
                    placeholder="What will be primarily taught in this course?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Description
                </label>
                <textarea
                  placeholder="Write full details..."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">Provide a comprehensive description of what students will learn</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
              <button className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                Save Draft
              </button>
              <button 
                onClick={() => setActiveTab('materials')}
                className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Continue to Materials →
              </button>
            </div>
          </div>
        )}

        {activeTab === 'materials' && (
          <div className="space-y-6">
            {/* Sections List */}
            {sections.map((section, index) => (
              <div key={section.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <button className="mt-1 text-gray-400 hover:text-gray-600 cursor-move">
                      <GripVertical className="w-5 h-5" />
                    </button>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {index + 1}. {section.title}
                          </h3>
                          <p className="text-gray-500 text-sm">{section.description}</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                            <Edit2 className="w-4 h-4" />
                            Edit
                          </button>
                          <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center gap-2">
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-gray-500">{section.materials} materials</span>
                          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                            <Plus className="w-4 h-4" />
                            Add Materials
                          </button>
                        </div>

                        {/* Add Material Form */}
                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-4">Add Material</h4>
                          
                          <div className="flex gap-2 mb-4 border-b border-gray-200">
                            <button className="px-4 py-2 text-sm font-medium text-purple-600 border-b-2 border-purple-600 flex items-center gap-2">
                              <Video className="w-4 h-4" />
                              Video
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 flex items-center gap-2">
                              <FileText className="w-4 h-4" />
                              Article
                            </button>
                          </div>

                          <div className="flex items-center justify-between p-6 border-2 border-dashed border-gray-300 rounded-lg bg-white">
                            <span className="text-gray-500">No file selected</span>
                            <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
                              Select Video
                            </button>
                          </div>

                          <div className="flex justify-end mt-4">
                            <button className="px-6 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                              Add material
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* New Section Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">New Section</h3>
              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter a Title"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
                
                <input
                  type="text"
                  placeholder="Enter a Learning Objective"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />

                <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Section
                </button>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button 
                onClick={() => setActiveTab('overview')}
                className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                ← Back to Overview
              </button>
              <button 
                onClick={() => setActiveTab('requirements')}
                className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Continue to Requirements →
              </button>
            </div>
          </div>
        )}

        {activeTab === 'requirements' && (
          <div className="space-y-6">
            {/* Prerequisites */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="flex items-start gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Course Requirements</h2>
                  <p className="text-gray-500 text-sm mt-1">What do students need to know before taking this course?</p>
                </div>
              </div>

              <div className="space-y-3">
                {courseData.requirements.map((req, index) => (
                  <div key={index} className="flex gap-3">
                    <input
                      type="text"
                      value={req}
                      onChange={(e) => updateRequirement(index, e.target.value)}
                      placeholder="e.g., Basic understanding of programming"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                    {courseData.requirements.length > 1 && (
                      <button
                        onClick={() => removeRequirement(index)}
                        className="px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={addRequirement}
                  className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Requirement
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="flex items-start gap-3 mb-6">
                <Users className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Target Audience</h2>
                  <p className="text-gray-500 text-sm mt-1">Who is this course for?</p>
                </div>
              </div>

              <div className="space-y-3">
                {courseData.targetAudience.map((audience, index) => (
                  <div key={index} className="flex gap-3">
                    <input
                      type="text"
                      value={audience}
                      onChange={(e) => updateTargetAudience(index, e.target.value)}
                      placeholder="e.g., Aspiring data scientists"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                    {courseData.targetAudience.length > 1 && (
                      <button
                        onClick={() => removeTargetAudience(index)}
                        className="px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={addTargetAudience}
                  className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Audience
                </button>
              </div>
            </div>

            {/* Course Settings */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Course Settings</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Estimated Duration
                  </label>
                  <input
                    type="text"
                    value={courseData.duration}
                    onChange={(e) => setCourseData({...courseData, duration: e.target.value})}
                    placeholder="e.g., 8 weeks, 20 hours"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Award className="w-4 h-4 inline mr-2" />
                    Certificate
                  </label>
                  <div className="flex items-center gap-4 h-[52px]">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={courseData.certificateEnabled}
                        onChange={(e) => setCourseData({...courseData, certificateEnabled: e.target.checked})}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                      />
                      <span className="text-gray-700">Provide certificate upon completion</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button 
                onClick={() => setActiveTab('materials')}
                className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                ← Back to Materials
              </button>
              <button 
                onClick={() => setActiveTab('publish')}
                className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Continue to Publish →
              </button>
            </div>
          </div>
        )}

        {activeTab === 'publish' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="flex items-start gap-3 mb-6">
                <DollarSign className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Pricing</h2>
                  <p className="text-gray-500 text-sm mt-1">Set the price for your course</p>
                </div>
              </div>

              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={courseData.isFree}
                    onChange={(e) => setCourseData({...courseData, isFree: e.target.checked})}
                    className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                  />
                  <div>
                    <span className="font-medium text-gray-900">Make this course free</span>
                    <p className="text-sm text-gray-500">Students can enroll without payment</p>
                  </div>
                </label>
              </div>

              {!courseData.isFree && (
                <>
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Course Price
                      </label>
                      <input
                        type="number"
                        value={courseData.price}
                        onChange={(e) => setCourseData({...courseData, price: e.target.value})}
                        placeholder="0.00"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Currency
                      </label>
                      <div className="relative">
                        <select 
                          value={courseData.currency}
                          onChange={(e) => setCourseData({...courseData, currency: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none bg-white"
                        >
                          <option>USD</option>
                          <option>EUR</option>
                          <option>GBP</option>
                          <option>NGN</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Discount Option */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <label className="flex items-start gap-3 cursor-pointer mb-3">
                      <input
                        type="checkbox"
                        checked={courseData.hasDiscount}
                        onChange={(e) => setCourseData({...courseData, hasDiscount: e.target.checked})}
                        className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500 mt-0.5"
                      />
                      <div>
                        <span className="font-medium text-gray-900">Offer a promotional discount</span>
                        <p className="text-sm text-gray-500">Attract more students with a limited-time offer</p>
                      </div>
                    </label>

                    {courseData.hasDiscount && (
                      <div className="mt-3">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Discounted Price
                        </label>
                        <input
                          type="number"
                          value={courseData.discountPrice}
                          onChange={(e) => setCourseData({...courseData, discountPrice: e.target.value})}
                          placeholder="0.00"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white"
                        />
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


export default CoursePriceCard
