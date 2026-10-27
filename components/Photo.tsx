import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

/**
 * Renders /public/images/<file> when it exists; otherwise a tonal placeholder.
 * Drop real photography into /public/images using the filenames in /public/images/README.md
 * and it is picked up on the next build, with no code change.
 */
export function Photo({
  file,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: {
  file: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", "images", file));
  return (
    <div className={`relative overflow-hidden bg-ink-soft ${className}`}>
      {exists ? (
        <Image src={`/images/${file}`} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div
          role="img"
          aria-label={`Placeholder: ${alt}`}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,#2a2620_0%,#141416_55%,#0B0B0C_100%)]"
        >
          <div className="absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(0deg,#F5F1E8_0,#F5F1E8_1px,transparent_1px,transparent_6px)]" />
        </div>
      )}
    </div>
  );
}
