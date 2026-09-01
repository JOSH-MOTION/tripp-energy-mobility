import type { Metadata } from "next";
import { ProjectTemplate } from "@/components/projects/ProjectTemplate";
import { getProject } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "PSEBP: School Electric Bus Project",
  description:
    "School Electric Bus Project: new electric school buses for higher-fee schools, financed through DFI concessional loans.",
};

export default function PsebpPage() {
  const project = getProject("psebp")!;
  return <ProjectTemplate project={project} />;
}
