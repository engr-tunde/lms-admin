import { useFormikContext } from "formik";
import { useState } from "react";
import { UploadIcon } from "../globals/Icons";
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
    <div className="col-span-1 md:col-span-2 space-y-2">

      {label && (
        <label className="text-[14px] font-medium capitalize">{label}</label>
      )}

      {!file ? (
        <label className="block">
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer
              ${error && isTouched ? "border-red-400" : "border-gray-300 hover:border-purple-400"}
            `}
          >
            <UploadIcon className="w-12 h-12 mx-auto text-gray-400 mb-3" />

            <p className="text-sm text-gray-600 mb-1">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-500">MP4, MOV, AVI up to 500MB</p>

            <input
              type="file"
              accept="video/*"
              className="hidden"
              onChange={handleSelect}
              onBlur={() => handleBlur({ target: { name } })}
            />
          </div>
        </label>
      ) : (
        <div className="border rounded-lg p-4 bg-white space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">{file.name}</p>
              <p className="text-xs text-gray-500 capitalize">Video file</p>
            </div>

            <FaTimes
              className="text-red-500 cursor-pointer"
              onClick={handleRemove}
            />
          </div>

          {/* Progress */}
          <div className="w-full h-2 bg-gray-200 rounded">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-purple-500 rounded"
            />
          </div>

          <span className="text-xs text-gray-500">{progress}%</span>
        </div>
      )}

      {error && isTouched && (
        <div className="text-red-500 text-[12px] lowercase mt-1">{error}</div>
      )}
    </div>
  );
};

export default VideoUploadField;
