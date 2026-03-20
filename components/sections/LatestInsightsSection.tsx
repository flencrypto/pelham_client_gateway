import React from "react";
import Image from "next/image";
import type { InsightArticle } from "@/types/pelham";
import { formatArticlePublicationDateForDisplay } from "@/lib/pelhamProjectUtils";
import { SectionHeaderBlock } from "@/components/ui/PelhamUiComponents";

interface LatestInsightsSectionProps {
  insightArticles: InsightArticle[];
  /** Maximum number of articles to display. Defaults to 3. */
  maximumArticlesToDisplay?: number;
}

/**
 * Displays a preview grid of the most recent Pelham thought-leadership articles.
 */
export function LatestInsightsSection({
  insightArticles,
  maximumArticlesToDisplay = 3,
}: LatestInsightsSectionProps) {
  const articlesToDisplay = insightArticles.slice(0, maximumArticlesToDisplay);

  return (
    <section className="bg-zinc-950 py-24" id="insights">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col gap-12">
          <div className="flex items-end justify-between gap-6">
            <SectionHeaderBlock
              eyebrowLabel="Insights"
              sectionHeadingText="Thinking on the Future of Interiors"
            />
            <a
              href="#insights"
              className="hidden shrink-0 text-sm font-medium text-lime-400 hover:text-lime-300 sm:block"
            >
              View all articles →
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articlesToDisplay.map((article) => (
              <InsightArticleCard key={article.articleId} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Internal helper component
// ---------------------------------------------------------------------------

interface InsightArticleCardProps {
  article: InsightArticle;
}

function InsightArticleCard({ article }: InsightArticleCardProps) {
  const formattedPublicationDate = formatArticlePublicationDateForDisplay(
    article.articlePublicationDate
  );
  const readingTimeDisplayText = `${article.estimatedReadingTimeMinutes} min read`;

  return (
    <article className="group flex cursor-pointer flex-col gap-4 rounded-2xl border border-white/10 bg-zinc-900 p-5 transition-all hover:border-lime-400/20 hover:shadow-xl hover:shadow-lime-400/5">
      {/* Article thumbnail */}
      <div className="relative h-40 overflow-hidden rounded-xl">
        <Image
          src={article.thumbnailImageUrl}
          alt={`Thumbnail for article: ${article.articleTitle}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Article metadata */}
      <div className="flex items-center gap-2 text-xs text-zinc-500">
        <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 font-medium text-zinc-400">
          {article.articleCategoryTag}
        </span>
        <span>·</span>
        <span>{readingTimeDisplayText}</span>
      </div>

      {/* Article title */}
      <h3 className="text-base font-semibold leading-snug text-white group-hover:text-lime-400 transition-colors">
        {article.articleTitle}
      </h3>

      {/* Article excerpt */}
      <p className="line-clamp-2 text-sm leading-6 text-zinc-400">
        {article.articleExcerptText}
      </p>

      {/* Author and date */}
      <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4 text-xs text-zinc-500">
        <span>{article.authorFullName}</span>
        <span>{formattedPublicationDate}</span>
      </div>
    </article>
  );
}
