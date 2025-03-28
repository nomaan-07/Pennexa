import { useRef } from "react";
import { Upload } from "lucide-react";
import { useToast } from "../../hooks/useToast";

const AvatarUpload = ({ setValue, avatar }) => {
  const { showToast } = useToast();
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        showToast("failed", "Only image files are allowed.");
        return;
      }
      if (file.size > 1024 * 1024) {
        showToast("failed", "File size must be less than 1MB.");
        return;
      }

      setValue("avatar", file);
    }
  };

  return (
    <div className="xs:justify-start flex items-center justify-center gap-2">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      <div
        className="xs:h-11 flex h-9 items-center gap-2 rounded-full border border-emerald-500 px-4 transition-colors md:cursor-pointer md:hover:bg-emerald-50 dark:md:hover:bg-emerald-950"
        onClick={() => fileInputRef.current.click()}
      >
        <Upload className="size-3.5 sm:size-4" strokeWidth={2.5} />

        <p className="flex items-center gap-2 text-xs sm:text-sm">
          {avatar?.name ? (
            <>
              <span>{avatar.name}</span>
              <span>{(avatar.size / (1024 * 1024)).toFixed(2)} MB</span>
            </>
          ) : (
            "Select Image"
          )}
        </p>
      </div>
    </div>
  );
};

export default AvatarUpload;
