import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { newsPosts, getPost } from "@/lib/data/news";

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero title={post.title}>
        <p className="mt-4 text-sm text-white/60">
          {post.category} · {post.date}
        </p>
      </PageHero>

      <section className="py-20">
        <Container className="max-w-2xl">
          <Reveal>
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:text-navy"
            >
              <ArrowLeft weight="bold" className="size-4" />
              Back to News
            </Link>
          </Reveal>
          <div className="prose-body mt-8">
            {post.body.map((para, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p className="leading-relaxed text-ink/80">{para}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
