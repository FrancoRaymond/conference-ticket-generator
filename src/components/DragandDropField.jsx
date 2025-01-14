import React, { useState, useEffect } from "react";
import uploadIcon from "../assets/images/icon-upload.svg";
import { useAppContext } from "../context/context";

const DragandDropField = () => {
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);
  const { formErrors, setFormData } = useAppContext();

  const MAX_SIZE = 500 * 1024; 

  const validateFile = (uploadedFile) => {
    if (!uploadedFile) return false;
    if (!uploadedFile.type.startsWith("image/")) {
      setError("Only image files are allowed.");
      return false;
    }
    if (uploadedFile.size > MAX_SIZE) {
      setError("File size must be under 500 KB.");
      return false;
    }
    setError("");
    return true;
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files[0];
    if (validateFile(uploadedFile)) {
      const previewUrl = URL.createObjectURL(uploadedFile);
      setFile(previewUrl);
      setFormData((prevData) => ({
        ...prevData,
        avatar: previewUrl,
      }));
    }
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (validateFile(uploadedFile)) {
      const previewUrl = URL.createObjectURL(uploadedFile);
      setFile(previewUrl);
      setFormData((prevData) => ({
        ...prevData,
        avatar: previewUrl,
      }));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleRemoveImage = () => {
    setFile(null);
    setError("");
    setFormData((prevData) => ({
      ...prevData,
      avatar: null, 
    }));
  };

  useEffect(() => {
    return () => {
      if (file) {
        URL.revokeObjectURL(file);
      }
    };
  }, [file]);

  return (
    <label htmlFor="avatar">
      Upload avatar
      <br />
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-dashed border-2 border-gray-400 rounded-md p-4 text-center bg-white bg-opacity-15"
      >
        {file ? (
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={file}
                alt="Uploaded preview"
                className="size-12 rounded-full object-cover border border-gray-400"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleRemoveImage}
                className="px-4 py-[1px] text-sm bg-white bg-opacity-15 text-white rounded-md"
              >
                Remove Image
              </button>
              <label
                htmlFor="fileInput"
                className="px-4 py-[1px] text-sm bg-white bg-opacity-15 text-white rounded-md cursor-pointer"
              >
                Change Image
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        ) : (
          <div>
            <label
              htmlFor="fileInput"
              className="mt-2 inline-block cursor-pointer p-1 rounded-md bg-white bg-opacity-20 border border-gray-600"
            >
              <img src={uploadIcon} alt="" />
            </label>
            <p className="text-gray-500">Drag and drop or click to upload</p>
          </div>
        )}
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="fileInput"
          accept="image/*"
        />
      </div>
      {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
      {formErrors.avatar && (
        <p className="mt-2 text-red-500 text-sm">Please upload an avatar</p>
      )}
    </label>
  );
};

export default DragandDropField;
