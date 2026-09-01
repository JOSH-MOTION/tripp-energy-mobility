"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { clsx } from "clsx";
import { newsCategories, newsPosts } from "@/lib/data/news";

export function NewsGrid() {
  const [filter, setFilter] = useState<string | null>(null);
  const visible = filter ? newsPosts.filter((p) => p.category === filter) : newsPosts;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter(null)}
          className={clsx(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            filter === null ? "bg-navy text-white" : "bg-surface text-navy/70 hover:bg-navy-tint"
          )}
        >
          All
        </button>
        {newsCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={clsx(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              filter === cat ? "bg-navy text-white" : "bg-surface text-navy/70 hover:bg-navy-tint"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <motion.div layout key={post.slug}>
            <Link
              href={`/news/${post.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-7 transition-shadow hover:shadow-xl"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-teal">
                {post.category}
              </span>
              <h2 className="mt-2 text-lg font-semibold leading-snug text-navy">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">
                {post.excerpt}
              </p>
              <p className="mt-4 text-xs text-muted">{post.date}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
