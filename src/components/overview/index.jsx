import { Link } from "react-router-dom";
import { PlayButtonIcon, ListColumnsIcon } from "../globals/Icons"

const OverviewOptions = () => {

  const courseIcon = () => {
    return (< PlayButtonIcon className="text-4xl text-gray-600" />)
  }
  const practiceTestIcon = () => {
    return (< ListColumnsIcon className="text-4xl text-gray-600" />)
  }

  return (
    <div className="flex justify-center gap-10 w-full h-full py-20">
      <Link 
        to={"/create"}
        className="flex flex-col items-center justify-center w-[30%] border-2 p-5 gap-4 cursor-pointer hViewOptions:shadow-lg hViewOptions:border-black transition-all duration-200"
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

export default OverviewOptions;