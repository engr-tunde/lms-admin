import { useFormikContext } from "formik";
import { FiUpload } from "react-icons/fi";


const CsvFileUploadField = ({ name }) => {
  const { setFieldValue, values } = useFormikContext();
  const handleFileChange = (e) => {
    setFieldValue(name, e.target.files[0]);
  }
  const handleDrop = (e) => {
    e.preventDefault();
    setFieldValue(name, e.dataTransfer.files[0]);
  };

  const file = values[name];

  const uploadIcon = () => (
    <FiUpload size={30} className="text-merseBorder" />
  );

  return (
    <>
    {!file ? (
      <label 
        htmlFor="csvUpload"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="flex flex-col gap-1 items-center justify-center border border-gray-300 border-dashed rounded-md py-10 cursor-pointer hover:bg-gray-50"
      >
        <input 
          id="csvUpload"
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleFileChange}
          />
        {uploadIcon()}
        <span className="text-gray-500 text-sm text-center">
          Drag and drop your CSV file here, or click to browse
        </span>
        <span className="text-xs text-gray-400 mt-1">
          Supports CSV files up to 5MB
        </span>
      </label>
    ): (
      <div className="border border-gray-200 rounded-md py-6 px-4 text-center">
        <p className="text-gray-700 font-medium">File uploaded</p>
        <p className="text-sm text-gray-500 mt-1">{file.name}</p>
      </div>
    )}
    </>
  )
}

export default CsvFileUploadField;