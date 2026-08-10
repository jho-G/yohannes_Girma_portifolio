import { Fragment } from "react";

interface HighlightKeywordsProps {
  text: string;
  keywords: string[];
}

export function HighlightKeywords({ text, keywords }: HighlightKeywordsProps) {
  if (keywords.length === 0) {
    return <>{text}</>;
  }

  const pattern = new RegExp(
    `(${keywords.map((keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi",
  );
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, index) =>
        keywords.some(
          (keyword) => keyword.toLowerCase() === part.toLowerCase(),
        ) ? (
          <span key={index} className="font-medium text-primary">
            {part}
          </span>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
