import { FieldArray, useFormikContext } from "formik";
import { useState, useEffect } from "react";
import { UploadIcon, PlusIcon } from "../globals/Icons";
import { X } from "lucide-react";

const VideoUploadField = ({ name, label }) => {
  const { setFieldValue, values, errors, touched, setFieldTouched } =
    useFormikContext();

  const fieldValues = values[name] || [];

  const [progressList, setProgressList] = useState(
    fieldValues.map(() => 0)
  );

  useEffect(() => {
    setProgressList(fieldValues.map(() => 0));
  }, [fieldValues.length]);

  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <div className="space-y-4">
          {label && <label className="text-[14px] font-medium">{label}</label>}

          {fieldValues.map((file, index) => {
            const fieldName = `${name}[${index}]`;
            const error = errors?.[name]?.[index];
            const isTouched = touched?.[name]?.[index];

            const handleSelect = (e) => {
              const selected = e.target.files[0];
              if (!selected) return;

              setFieldValue(fieldName, selected);
              setFieldTouched(fieldName, true);

              let i = 0;
              const interval = setInterval(() => {
                i += 10;
                setProgressList((prev) =>
                  prev.map((p, j) => (j === index ? Math.min(i, 100) : p))
                );
                if (i >= 100) clearInterval(interval);
              }, 150);
            };

            return (
              <div
                key={index}
                className="border rounded-lg p-4 bg-white space-y-3"
              >
                {!file ? (
                  <label className="block cursor-pointer">
                    <div
                      className={`border-2 border-dashed rounded-lg p-8 text-center ${
                        error && isTouched
                          ? "border-red-400"
                          : "border-gray-300 hover:border-purple-400"
                      }`}
                    >
                      <UploadIcon className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                      <p className="text-sm text-gray-600 mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        MP4, MOV, AVI up to 500MB
                      </p>

                      <input
                        type="file"
                        accept="video/*"
                        className="hidden"
                        onChange={handleSelect}
                      />
                    </div>
                  </label>
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">
                          {file.name || "Selected Video"}
                        </p>
                        <p className="text-xs text-gray-500">Video file</p>
                      </div>
                      <X
                        className="text-red-500 cursor-pointer w-4 h-4"
                        onClick={() => arrayHelpers.remove(index)}
                      />
                    </div>

                    <div className="w-full h-2 bg-gray-200 rounded">
                      <div
                        style={{ width: `${progressList[index]}%` }}
                        className="h-full bg-purple-500 rounded"
                      />
                    </div>
                    <span className="text-xs text-gray-500">
                      {progressList[index]}%
                    </span>
                  </>
                )}
                {error && isTouched && (
                  <div className="text-red-500 text-[12px] lowercase">
                    {error}
                  </div>
                )}
              </div>
            );
          })}

          <button
            type="button"
            onClick={() => arrayHelpers.push(null)} // Use null instead of ""
            className="flex items-center gap-2 text-purple-600 font-medium text-sm"
          >
            <PlusIcon className="w-3 h-3" />
            Add Video
          </button>
        </div>
      )}
    />
  );
};

export default VideoUploadField;
