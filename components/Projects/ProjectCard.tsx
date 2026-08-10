import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { GithubIcon } from "@/components/icons/brand-icons";
import { HighlightKeywords } from "@/components/HighlightKeywords";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types";

const TECH_KEYWORDS = ["Django"];

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, image, video, githubUrl, liveUrl, liveLabel } =
    project;

  return (
    <Card className="gap-4 py-0 ring-foreground/10 transition-all hover:-translate-y-1 hover:ring-primary/40 hover:shadow-xl hover:shadow-primary/10">
      {video ? (
        <div className="relative aspect-video w-full overflow-hidden">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="size-full object-cover"
          />
        </div>
      ) : (
        image && (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        )
      )}
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4 pb-6">
        <p className="text-sm text-muted-foreground">
          <HighlightKeywords text={description} keywords={TECH_KEYWORDS} />
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
          )}
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ExternalLink className="size-4" />
              {liveLabel}
            </a>
          ) : (
            <span className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg bg-muted px-3.5 py-2 text-sm font-medium text-muted-foreground">
              {liveLabel}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
