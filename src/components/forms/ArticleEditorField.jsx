import { useFormikContext } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ArticleEditorField = ({ name, label }) => {
  const { values, setFieldValue, errors, touched, setFieldTouched } =
    useFormikContext();

  const value = values[name] || "";
  const error = errors?.[name];
  const isTouched = touched?.[name];

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
    <div className="space-y-4 bg-white">
      {label && <label className="text-[14px] font-medium">{label}</label>}

      <div className="border rounded-lg p-3 space-y-2">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={(val) => setFieldValue(name, val)}
          onBlur={() => setFieldTouched(name, true)}
          modules={modules}
          formats={formats}
          className="min-h-[200px]"
        />

        {error && isTouched && (
          <div className="text-red-500 text-[12px] lowercase">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleEditorField;
