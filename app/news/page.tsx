import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { NewsGrid } from "@/components/news/NewsGrid";

export const metadata: Metadata = {
  title: "News and Insights | SPARC+CM Solar Schools Africa",
  description:
    "Latest news from Tripp Energy and Mobility and the SPARC+CM programme: solar schools, electric buses, EV charging, and clean energy research across Africa and South Asia.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero title="News and Insights" />
      <section className="py-24">
        <Container>
          <NewsGrid />
        </Container>
      </section>
    </>
  );
}
