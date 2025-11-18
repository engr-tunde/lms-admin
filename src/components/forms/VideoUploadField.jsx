import { useFormikContext } from "formik";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const VideoUploadField = ({ name, label }) => {
  const { setFieldValue, values } = useFormikContext();
  const file = values[name];

  const [progress, setProgress] = useState(0);

  const handleSelect = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    // Set file in formik
    setFieldValue(name, selected);

    // Fake progress preview (your real upload will handle this)
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
        <label className="block mb-1 text-[14px] font-medium capitalize">
          {label}
        </label>
      )}

      {!file ? (
        // BEFORE SELECTION UI
        <label className="border border-black/40 w-full p-4 flex items-center justify-between cursor-pointer">
          <span className="text-gray-500 text-sm">No file selected</span>
          <span className="bg-purple-600 text-white px-4 py-2 text-sm">
            Select Video
          </span>
          <input
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleSelect}
          />
        </label>
      ) : (
        // AFTER SELECTION UI
        <div className="border border-black/40 p-4 relative">
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

          {/* PROGRESS BAR */}
          <div className="w-full h-2 bg-gray-200 mt-4 rounded">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-purple-500 rounded"
            ></div>
          </div>

          <span className="text-xs text-gray-500">{progress}%</span>
        </div>
      )}
    </div>
  );
};

export default VideoUploadField;
