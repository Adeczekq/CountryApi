import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
function BackButton() {
  return (
    <div className="py-20">
      <Link
        className="flex w-fit items-center gap-2 rounded-lg px-4 py-2 shadow-lg"
        to="/"
      >
        <FaArrowLeft />
        Back
      </Link>
    </div>
  );
}

export default BackButton;
