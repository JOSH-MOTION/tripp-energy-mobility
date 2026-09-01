import type { Metadata } from "next";
import { ProjectTemplate } from "@/components/projects/ProjectTemplate";
import { getProject } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "CSRP: Circular Solar Retrofit Project",
  description:
    "Circular Solar Retrofit Project: converting end-of-life petrol school buses into solar-charged electric vehicles for lower-fee Nigerian schools.",
};

export default function CsrpPage() {
  const project = getProject("csrp")!;
  return <ProjectTemplate project={project} />;
}
