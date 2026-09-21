import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ProjectCard } from "@/components/site/PortfolioGallery";
import { ResponsiveImage } from "@/components/site/ResponsiveImage";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppButton, CallButton } from "@/components/site/ContactButtons";
import { getProject, relatedProjects, type Project } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project unavailable — Woodland" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const t = `${loaderData.project.title} — Woodland`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.project.description },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.project.description },
        { property: "og:type", content: "article" },
        {
          property: "og:url",
          content: `${siteConfig.domain}/portfolio/${params.slug}`,
        },
      ],
      links: [
        {
          rel: "canonical",
          href: `${siteConfig.domain}/portfolio/${params.slug}`,
        },
      ],
    };
  },
  component: ProjectPage,
  errorComponent: ProjectMissing,
  notFoundComponent: ProjectMissing,
});

function ProjectMissing() {
  return (
    <main id="main" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
      <h1 className="max-w-[18ch]">We couldn't find that project.</h1>
      <Link
        to="/portfolio"
        className="mt-6 inline-block border-b border-forest pb-1 text-sm text-forest"
      >
        Back to portfolio
      </Link>
    </main>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const related = relatedProjects(project);

  return (
    <main id="main">
      <div className="mx-auto max-w-[1400px] px-5 pt-8 md:px-10">
        <Link
          to="/portfolio"
          className="text-sm text-muted-foreground hover:text-forest"
        >
          ← Portfolio
        </Link>
      </div>

      <section className="mx-auto mt-6 max-w-[1400px] px-5 md:px-10">
        <ResponsiveImage
          src={project.cover.src}
          srcSmall={project.cover.srcSmall}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          ratio="16 / 10"
          priority
        />
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr] md:gap-20 md:px-10 md:py-20">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-timber">
            {project.category}
          </p>
          <h1 className="mt-3 text-balance-tight">{project.title}</h1>
          <p className="mt-6 max-w-[62ch] text-muted-foreground">
            {project.description}
          </p>
        </div>
        <div>
          {project.materials?.length ? (
            <div className="border-t border-line pt-5">
              <h2 className="font-display text-xl">Materials</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {project.materials.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton
              message={`Hello Woodland, I'm interested in custom furniture similar to "${project.title}". My location is [location], and the approximate size is [size].`}
              label="Discuss something similar"
            />
            <CallButton />
          </div>
        </div>
      </section>

      {project.gallery.length > 0 ? (
        <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-10 md:pb-28">
          <div className="grid gap-6 md:grid-cols-2">
            {project.gallery.map((image, i) => (
              <Reveal
                key={image.src + i}
                delay={i * 80}
                className={i % 2 === 1 ? "md:mt-12" : ""}
              >
                <ResponsiveImage
                  src={image.src}
                  srcSmall={image.srcSmall}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  ratio="4 / 3"
                />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="border-t border-line bg-cream-deep py-16 md:py-24">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10">
            <h2>Related work</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, i) => (
                <ProjectCard
                  key={item.slug}
                  project={item}
                  index={i}
                  ratio="4 / 3"
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
