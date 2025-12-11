import { FieldArray, useFormikContext } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { PlusIcon, TrashIcon } from "../globals/Icons";

const ArticleEditorField = ({ name, label }) => {
  const { values, setFieldValue, errors, touched, setFieldTouched } =
    useFormikContext();

  const fieldValues = values[name] || [];

  const modules = {
    toolbar: [
      [{ header: [false, 1, 2, 3, 4] }],
      ["bold", "italic"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["code-block"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "list",
    "bullet",
    "link",
    "image",
    "code-block",
  ];

  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <div className="space-y-4">
          {label && <label className="text-[14px] font-medium">{label}</label>}

          {fieldValues.map((item, index) => {
            const fieldName = `${name}[${index}]`;
            const error = errors?.[name]?.[index];
            const isTouched = touched?.[name]?.[index];

            return (
              <div key={index} className="border rounded-lg p-3 space-y-2">
                <ReactQuill
                  theme="snow"
                  value={item || ""}
                  onChange={(val) => setFieldValue(fieldName, val)}
                  onBlur={() => setFieldTouched(fieldName, true)}
                  modules={modules}
                  formats={formats}
                  className="min-h-[200px]"
                />

                {error && isTouched && (
                  <div className="text-red-500 text-[12px] lowercase">
                    {error}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => arrayHelpers.remove(index)}
                  className="px-3 py-2 border text-red-500 border-red-300 rounded flex items-center gap-2"
                >
                  <TrashIcon className="w-4 h-4" />
                  Remove Article
                </button>
              </div>
            );
          })}

          <button
            type="button"
            onClick={() => arrayHelpers.push("")}
            className="flex items-center gap-2 text-purple-600 font-medium"
          >
            <PlusIcon className="w-4 h-4" />
            Add Article
          </button>
        </div>
      )}
    />
  );
};

export default ArticleEditorField;
