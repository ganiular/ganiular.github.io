import {
  siCodemagic,
  siCss,
  siCssmodules,
  siDart,
  siDocker,
  siExpress,
  siFastapi,
  siFigma,
  siFirebase,
  siFlutter,
  siGit,
  siHtml5,
  siJavascript,
  siMongodb,
  siNextdotjs,
  siPostgresql,
  siPostman,
  siPython,
  siRailway,
  siReact,
  siSqlalchemy,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import styles from "./page.module.css";

type BrandIcon = { path: string; hex: string };

const brandIcons: Record<string, BrandIcon> = {
  Flutter: siFlutter,
  Dart: siDart,
  Firebase: siFirebase,
  FastAPI: siFastapi,
  Python: siPython,
  PostgreSQL: siPostgresql,
  "Next.js": siNextdotjs,
  React: siReact,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  HTML: siHtml5,
  CSS: siCss,
  "CSS Modules": siCssmodules,
  Tailwind: siTailwindcss,
  "Express.js": siExpress,
  MongoDB: siMongodb,
  SQLAlchemy: siSqlalchemy,
  Docker: siDocker,
  Railway: siRailway,
  Postman: siPostman,
  Figma: siFigma,
  Codemagic: siCodemagic,
  Git: siGit,
};

export default function StackBadge({ name }: { name: string }) {
  const icon = brandIcons[name];

  return (
    <div className={styles.stackBadge} aria-label={name}>
      {icon ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d={icon.path} />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.genericTechIcon}>
          <path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" />
        </svg>
      )}
      <span>{name}</span>
    </div>
  );
}
