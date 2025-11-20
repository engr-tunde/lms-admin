import { useFormikContext } from "formik";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const VideoUploadField = ({ name, label }) => {
  const {
    setFieldValue,
    values,
    errors,
    touched,
    handleBlur,
    setFieldTouched,
  } = useFormikContext();

  const file = values[name];
  const error = errors[name];
  const isTouched = touched[name];

  const [progress, setProgress] = useState(0);

  const handleSelect = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    setFieldValue(name, selected);
    setFieldTouched(name, true);

    // Fake progress
    setProgress(0);
    let i = 0;
    const interval = setInterval(() => {
      i += 10;
      if (i >= 100) {
        i = 100;
        clearInterval(interval);
      }
      setProgress(i);
    }, 150);
  };

  const handleRemove = () => {
    setFieldValue(name, "");
    setProgress(0);
  };

  return (
    <div className="col-span-1 md:col-span-2">
      {label && (
        <label className="text-[14px] font-medium capitalize">
          {label}
        </label>
      )}

      {!file ? (
        <label
          className={`w-full p-4 flex items-center justify-between cursor-pointer border ${
            error && isTouched ? "border-red-500" : "border-merseBorder"
          }`}
        >
          <span className="text-gray-500 text-sm">No file selected</span>
          <span className="bg-purple-600 text-white px-4 py-2 text-sm">
            Select Video
          </span>
          <input
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleSelect}
            onBlur={() => handleBlur({ target: { name } })} // mark touched
          />
        </label>
      ) : (
        <div
          className={`border p-4 relative ${
            error && isTouched ? "border-red-500" : "border-black/40"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">{file.name}</p>
              <p className="text-xs text-gray-500 capitalize">Video</p>
            </div>

            <FaTimes
              className="text-red-500 cursor-pointer"
              onClick={handleRemove}
            />
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 bg-gray-200 mt-4 rounded">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-purple-500 rounded"
            ></div>
          </div>

          <span className="text-xs text-gray-500">{progress}%</span>
        </div>
      )}

      {error && isTouched && (
        <div className="text-red-500 text-[12px] font-400 lowercase mt-1">
          {error}
        </div>
      )}
    </div>
  );
};

export default VideoUploadField;
