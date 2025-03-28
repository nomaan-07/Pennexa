import { useState, useRef, useEffect } from "react";
import { Upload, User, ImagePlus } from "lucide-react";

import Button from "../buttons/Button";

import { useToast } from "../../hooks/useToast";

const AvatarUpload = ({ setValue, previewFile }) => {
  const [preview, setPreview] = useState(previewFile);
  const { showToast } = useToast();
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        showToast("failed", "Only image files are allowed.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        showToast("failed", "File size must be less than 5MB.");
        return;
      }

      setValue("avatar", file);

      if (preview) {
        URL.revokeObjectURL(preview);
      }

      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  function triggerFileInput(e) {
    e.preventDefault();
    fileInputRef.current.click();
  }

  useEffect(() => {
    if (!preview) return;

    return () => URL.revokeObjectURL(preview);
  }, [preview]);

  useEffect(() => {
    if (!previewFile) setPreview(null);
  }, [previewFile]);

  return (
    <div className="flex flex-col items-center gap-3 p-4 sm:gap-4 sm:p-6">
      <div
        onClick={triggerFileInput}
        className="group relative flex size-24 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-slate-300 bg-slate-100 transition-all duration-300 sm:size-32 md:size-36 md:hover:border-emerald-500 dark:border-slate-500 dark:bg-slate-700 dark:md:hover:border-emerald-400"
      >
        {preview ? (
          <>
            <img
              src={preview}
              alt="User avatar preview"
              className="size-full rounded-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/20 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100">
              <ImagePlus className="size-8 text-slate-100" />
            </div>
          </>
        ) : (
          <User
            className="size-10 text-slate-400 sm:size-16 dark:text-slate-300"
            strokeWidth={1}
          />
        )}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      <Button onClick={triggerFileInput}>
        <Upload className="size-3.5 sm:size-4" strokeWidth={2.5} />
        <span>Select Image</span>
      </Button>
    </div>
  );
};

export default AvatarUpload;
