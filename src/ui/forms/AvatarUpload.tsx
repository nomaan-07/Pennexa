import { ChangeEvent, useRef } from "react";
import { Upload } from "lucide-react";
import { useToast } from "../../hooks/useToast";

interface AvatarUploadProps {
  setValue: (value: string, file: File) => void;
  avatar: string | File;
}

function AvatarUpload({ setValue, avatar }: AvatarUploadProps) {
  const { showToast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];

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
    <div className="flex items-center gap-2">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      <div
        className="xs:h-11 flex h-9 items-center gap-2 rounded-full border border-emerald-500 px-4 transition-colors md:cursor-pointer md:hover:bg-emerald-50 dark:md:hover:bg-emerald-950"
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload className="size-3.5 shrink-0 sm:size-4" strokeWidth={2.5} />

        <p className="flex items-center gap-2 text-xs sm:text-sm">
          {typeof avatar !== "string" && avatar?.name ? (
            <>
              <span>{avatar.name.split("").splice(0, 15).join("")}</span>
              <span>{(avatar.size / (1024 * 1024)).toFixed(2)} MB</span>
            </>
          ) : (
            "Select Image"
          )}
        </p>
      </div>
    </div>
  );
}

export default AvatarUpload;
