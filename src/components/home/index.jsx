import { BsPlayBtn } from "react-icons/bs";
import { BsListColumns } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeCreateOptions = () => {

  const courseIcon = () => {
    return (< BsPlayBtn className="text-4xl text-gray-600" />)
  }
  const practiceTestIcon = () => {
    return (< BsListColumns className="text-4xl text-gray-600" />)
  }

  return (
    <div className="flex justify-center gap-10 w-full h-full py-20">
      <Link 
        to={"/create"}
        className="flex flex-col items-center justify-center w-[30%] border-2 p-5 gap-4 cursor-pointer hover:shadow-lg hover:border-black transition-all duration-200"
      >
        {courseIcon()}
        <span className="text-lg font-semibold">Course</span>
        <span className="text-center">
          Build engaging learning experiences through structured lessons, video tutorials, quizzes, and hands-on exercises.
        </span>
      </Link>
      <div 
        className="flex flex-col items-center justify-center w-[30%] border-2 p-5 gap-4 cursor-pointer hover:shadow-lg hover:border-black transition-all duration-200"
      >
        {practiceTestIcon()}
        <span className="text-lg font-semibold">Practice Test</span>
        <span className="text-center">
          Prepare learners for real-world assessments with curated questions, instant feedback, and exam-style challenges.
        </span>
      </div>
    </div>
  )
}

export default HomeCreateOptions;