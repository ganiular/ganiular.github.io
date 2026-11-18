import styles from "./page.module.css";
import Image from "next/image";
import { projects, skillGroups } from "./data";
import StackBadge from "./StackBadge";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <a className={styles.logo} href="#home" aria-label="Ganiu Quadri home">
          GQ<span>.</span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className={styles.headerLink}
          href="https://github.com/ganiular"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <Arrow />
        </a>
      </header>

      <section className={styles.hero} id="home">
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            <span className={styles.pulse} /> FULL-STACK SOFTWARE ENGINEER{" "}
            <span className={styles.location}>· NIGERIA</span>
          </p>
          <h1>
            Building useful
            <br />
            things for <span className={styles.accent}>real life.</span>
          </h1>
          <p className={styles.heroLead}>
            I’m Ganiu Quadri, a software engineer working across Flutter mobile
            apps, backend systems, and the web. I take ideas from first sketch
            to production and keep them running.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#projects">
              Explore projects <span aria-hidden="true">↓</span>
            </a>
            <a
              className={styles.secondaryButton}
              href="mailto:ganiular@gmail.com"
            >
              Get in touch <Arrow />
            </a>
          </div>
          <div className={styles.heroMeta}>
            <span>Building since 2020</span>
            <i /> <span>Flutter · Backend · Web</span>
          </div>
        </div>
        <div
          className={styles.heroVisual}
          aria-label="Abstract mobile and web product illustration"
        >
          <div className={styles.visualGlow} />
          <div className={styles.visualRing} />
          <div className={styles.mockWindow}>
            <div className={styles.windowBar}>
              <span />
              <span />
              <span />
              <b>PRODUCT / 001</b>
            </div>
            <div className={styles.windowContent}>
              <div className={styles.windowLines}>
                <i />
                <i />
                <i />
              </div>
              <div className={styles.windowTile}>
                <b>GQ</b>
                <span>
                  BUILD
                  <br />
                  SHIP
                  <br />
                  GROW
                </span>
              </div>
            </div>
            <div className={styles.windowFooter}>
              <span>IDEA → PRODUCT</span>
              <span>01 / 04</span>
            </div>
          </div>
          <div className={styles.phoneMock}>
            <div className={styles.phoneCamera} />
            <div className={styles.phoneLabel}>
              GN<span>·</span>
            </div>
            <div className={styles.phoneBalance}>
              Wallet balance<strong>₦ 24,800</strong>
            </div>
            <div className={styles.phoneButton}>
              Buy data <Arrow />
            </div>
            <div className={styles.phoneDots}>● ● ●</div>
          </div>
          <span className={styles.visualCaption}>
            DESIGNED TO SOLVE REAL PROBLEMS
          </span>
        </div>
        <div className={styles.heroBottom}>
          <span>01 — INTRODUCTION</span>
          <a href="#about">SCROLL TO EXPLORE ↓</a>
        </div>
      </section>

      <section className={styles.aboutSection} id="about">
        <div className={styles.sectionIndex}>
          01 <span>ABOUT</span>
        </div>
        <div className={styles.aboutContent}>
          <p className={styles.kicker}>ENGINEERING WITH PURPOSE</p>
          <h2>
            From a good idea
            <br />
            to <span className={styles.accent}>something people use.</span>
          </h2>
          <div className={styles.aboutColumns}>
            <p>
              I’m a Full-Stack Software Engineer with hands-on experience
              building mobile, backend, and web products. I work with Flutter,
              Python APIs, databases, payment integrations, and modern web
              stacks.
            </p>
            <p>
              I enjoy solving practical problems, taking ownership across the
              product lifecycle, and staying involved through deployment and
              maintenance. I’m open to full-time roles, remote opportunities,
              and challenging projects.
            </p>
          </div>
          <div className={styles.aboutLinks}>
            <a
              href="https://linkedin.com/in/ganiular"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <Arrow />
            </a>
            <a
              href="https://github.com/ganiular"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Arrow />
            </a>
            <a href="mailto:ganiular@gmail.com">
              Email <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className={styles.projectsSection} id="projects">
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.kicker}>SELECTED PRODUCTS</p>
            <h2>
              Products I’ve
              <br />
              <span className={styles.accent}>helped bring to life.</span>
            </h2>
          </div>
          <p className={styles.sectionNote}>
            A selection of product work across mobile, backend, and web. Private
            source code stays private; explore the live products and developer
            resources below.
          </p>
        </div>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <article className={styles.projectCard} key={project.name}>
              <div
                className={`${styles.projectVisual} ${styles[project.visual]} ${project.cover ? styles.hasCover : ""}`}
              >
                <span className={styles.projectNumber}>
                  {project.number} / PRODUCT
                </span>
                {project.cover && (
                  <Image
                    className={styles.projectCover}
                    src={project.cover}
                    alt={`${project.name} project cover`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                )}
                {!project.cover && (
                  <span className={styles.projectGlyph}>{project.glyph}</span>
                )}
                <span className={styles.visualTag}>{project.type}</span>
                {!project.cover && (
                  <>
                    <span className={styles.orbitOne} />
                    <span className={styles.orbitTwo} />
                  </>
                )}
              </div>
              <div className={styles.projectBody}>
                <div className={styles.projectTitle}>
                  <div>
                    <p className={styles.projectType}>{project.type}</p>
                    <div className={styles.projectNameRow}>
                      {project.logo && (
                        <Image
                          className={styles.projectLogo}
                          src={project.logo}
                          alt={`${project.name} logo`}
                          width={36}
                          height={36}
                        />
                      )}
                      <h3>{project.name}</h3>
                    </div>
                  </div>
                  <span className={styles.projectNum}>{project.number}</span>
                </div>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <p className={styles.contribution}>
                  <span>MY ROLE</span>
                  {project.contribution}
                </p>
                <div className={styles.projectHighlights}>
                  <span className={styles.highlightLabel}>KEY FEATURES</span>
                  <p>{project.highlights.join(" · ")}</p>
                </div>
                <div className={styles.tags}>
                  {project.stack.map((skill) => (
                    <StackBadge key={skill} name={skill} />
                  ))}
                </div>
                {project.links.length > 0 ? (
                  <div className={styles.projectLinks}>
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label} <Arrow />
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className={styles.privateNote}>
                    Private product · project details on request
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.skillsSection} id="skills">
        <div className={styles.sectionIndex}>
          02 <span>TOOLKIT</span>
        </div>
        <div className={styles.skillsContent}>
          <p className={styles.kicker}>TECHNICAL SKILLS</p>
          <h2>
            The tools behind
            <br />
            <span className={styles.accent}>the work.</span>
          </h2>
          <div className={styles.skillGrid}>
            {skillGroups.map((group) => (
              <div className={styles.skillGroup} key={group.title}>
                <h3>{group.title}</h3>
                <div className={styles.tags}>
                  {group.skills.map((skill) => (
                    <StackBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.experienceSection} id="experience">
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.kicker}>EXPERIENCE & EDUCATION</p>
            <h2>
              Growing through
              <br />
              <span className={styles.accent}>building.</span>
            </h2>
          </div>
          <p className={styles.sectionNote}>
            Practical experience shipping customer-facing mobile experiences and
            a foundation in computer science.
          </p>
        </div>
        <div className={styles.timeline}>
          <article className={styles.timelineItem}>
            <div className={styles.timelineDate}>2023 — 2025</div>
            <div className={styles.timelineBody}>
              <p className={styles.kicker}>PROFESSIONAL EXPERIENCE</p>
              <h3>Flutter Mobile Frontend Developer</h3>
              <p className={styles.company}>Cooldata Plug</p>
              <p>
                Developed and maintained Flutter application interfaces for VTU
                and fintech products. Built reusable responsive UI, integrated
                backend APIs, and collaborated on mobile product features using
                Provider and BLoC.
              </p>
              <div className={styles.tags}>
                {["Flutter", "Dart", "Provider", "BLoC", "REST APIs"].map((skill) => (
                  <StackBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          </article>
          <article className={styles.timelineItem}>
            <div className={styles.timelineDate}>GRADUATED 2024</div>
            <div className={styles.timelineBody}>
              <p className={styles.kicker}>EDUCATION</p>
              <h3>B.Sc. Computer Science</h3>
              <p className={styles.company}>Bayero University Kano</p>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.contactSection} id="contact">
        <div className={styles.contactGlow} />
        <div className={styles.contactContent}>
          <p className={styles.kicker}>HAVE A GOOD PROBLEM TO SOLVE?</p>
          <h2>
            Let’s build
            <br />
            <span className={styles.accent}>something useful.</span>
          </h2>
          <p>
            I’m open to full-time software engineering roles, remote
            opportunities, and ambitious product work.
          </p>
          <a className={styles.primaryButton} href="mailto:ganiular@gmail.com">
            Start a conversation <Arrow />
          </a>
        </div>
        <div className={styles.contactAside}>
          <span>AVAILABLE FOR</span>
          <p>
            Full-time roles
            <br />
            Remote opportunities
            <br />
            Product collaborations
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <a className={styles.logo} href="#home">
          GQ<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} Ganiu Quadri · Built with care in
          Nigeria.
        </p>
        <div>
          <a
            href="https://github.com/ganiular"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Arrow />
          </a>
          <a
            href="https://linkedin.com/in/ganiular"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Arrow />
          </a>
          <a href="mailto:ganiular@gmail.com">
            Email <Arrow />
          </a>
        </div>
      </footer>
    </main>
  );
}
