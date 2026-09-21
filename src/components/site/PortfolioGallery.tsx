import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";
import { ResponsiveImage } from "./ResponsiveImage";
import { Reveal } from "./Reveal";

const ratios = ["4 / 5", "4 / 3", "1 / 1", "3 / 4", "4 / 3", "5 / 4"];

export function ProjectCard({
  project,
  ratio,
  index = 0,
}: {
  project: Project;
  ratio?: string;
  index?: number;
}) {
  return (
    <Reveal
      delay={(index % 3) * 90}
      className={index % 2 === 1 ? "md:mt-16" : ""}
    >
      <Link
        to="/portfolio/$slug"
        params={{ slug: project.slug }}
        className="group block"
      >
        <ResponsiveImage
          src={project.cover.src}
          srcSmall={project.cover.srcSmall}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          ratio={ratio ?? ratios[index % ratios.length]}
          imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-line pt-3">
          <h3 className="font-display text-lg leading-snug">{project.title}</h3>
          <span className="shrink-0 text-xs uppercase tracking-[0.12em] text-muted-foreground">
            {project.category}
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function PortfolioGallery({ items }: { items: Project[] }) {
  if (items.length === 0) {
    return (
      <div className="border border-dashed border-line px-6 py-16 text-center">
        <h3 className="font-display text-xl">
          No projects in this category yet
        </h3>
        <p className="mx-auto mt-3 max-w-[52ch] text-muted-foreground">
          Choose another category, or send us a message describing the piece you
          have in mind — most of our work is one-off and made to measure.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project, i) => (
        <ProjectCard key={project.slug} project={project} index={i} />
      ))}
    </div>
  );
}
