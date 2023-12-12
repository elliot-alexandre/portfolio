import { projects } from "~/lib/data";
import ProjectPage from "~/lib/pages/project";

export default function Page() {
  const data = projects[2];

  return <ProjectPage {...data} />;
}