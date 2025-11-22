import { useFormikContext } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ArticleEditorField = ({ name, label }) => {
  const { values, setFieldValue, errors, touched, setFieldTouched } =
    useFormikContext();

  const value = values[name];
  const error = errors[name];
  const isTouched = touched[name];

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

  const handleBlur = () => {
    setFieldTouched(name, true);
  };

  return (
    <div className="col-span-1 md:col-span-2">
      {label && (
        <label className="text-[14px] font-medium capitalize">{label}</label>
      )}

      <div
        className={`border-[3px] bg-white transition-all border-merseBorder ${
          error && isTouched ? "" : ""
        }`}
      >
        <ReactQuill
          theme="snow"
          value={value}
          onChange={(val) => setFieldValue(name, val)}
          onBlur={handleBlur}
          modules={modules}
          formats={formats}
          className="min-h-[100px]"
        />
      </div>

      {error && isTouched && (
        <div className="text-red-500 text-[12px] lowercase mt-1">{error}</div>
      )}
    </div>
  );
};

export default ArticleEditorField;
