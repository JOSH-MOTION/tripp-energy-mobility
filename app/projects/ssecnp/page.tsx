import type { Metadata } from "next";
import { ProjectTemplate } from "@/components/projects/ProjectTemplate";
import { getProject } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "SSECNP: Solar-Storage Energy and Charging Nexus",
  description:
    "Solar-Storage Energy and Charging Nexus: universal rooftop solar and battery storage installed as primary electricity for every SPARC+CM school.",
};

export default function SsecnpPage() {
  const project = getProject("ssecnp")!;
  return <ProjectTemplate project={project} />;
}
