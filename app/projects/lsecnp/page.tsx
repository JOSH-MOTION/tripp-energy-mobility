import type { Metadata } from "next";
import { ProjectTemplate } from "@/components/projects/ProjectTemplate";
import { getProject } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "LSECNP: School-Anchored EV Charging Network",
  description:
    "School-Anchored EV Charging Network: 108+ solar-powered public EV charging points on Lagos traffic corridors, accessible via app or USSD.",
};

export default function LsecnpPage() {
  const project = getProject("lsecnp")!;
  return <ProjectTemplate project={project} />;
}
