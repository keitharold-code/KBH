import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

/**
 * Renders /public/images/<file> when it exists; otherwise a proof-sheet placeholder with crop marks.
 * Drop real photography into /public/images using the filenames in /public/images/README.md
 * and it is picked up on the next build, with no code change.
 */
export function Photo({
  file,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  arch = false,
  caption = "Photograph",
}: {
  file: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Arched (window) crop for portraits. */
  arch?: boolean;
  caption?: string;
}) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", "images", file));
  return (
    <div className={`relative overflow-hidden bg-ink-soft ${arch ? "rounded-t-[999px]" : ""} ${className}`}>
      {exists ? (
        <Image src={`/images/${file}`} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div role="img" aria-label={`Placeholder: ${alt}`} className="absolute inset-0 bg-[linear-gradient(160deg,#1d1b18_0%,#121214_60%,#0B0B0C_100%)]">
          <span className="label absolute inset-x-0 bottom-5 text-center text-stone">{caption}</span>
          {!arch && (
            <>
              <span className="absolute left-4 top-4 h-4 w-4 border-l border-t border-gold/60" />
              <span className="absolute right-4 top-4 h-4 w-4 border-r border-t border-gold/60" />
              <span className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-gold/60" />
              <span className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-gold/60" />
            </>
          )}
        </div>
      )}
    </div>
  );
}
