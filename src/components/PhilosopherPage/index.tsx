import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Work = {
  title: string;
  year: string;
  description?: string;
  id?: string;
  link?: string;
};

type ExternalLink = {
  label: string;
  url: string;
};

type Props = {
  name?: string;
  dates: string;
  descriptor: string;
  works?: Work[];
  links?: ExternalLink[];
  children?: ReactNode;
};

export default function PhilosopherPage({dates, descriptor, works, links, children}: Props) {
  return (
    <div className={styles.philosopher}>
      <div className={styles.header}>
        <p className={styles.descriptor}><em>{descriptor}, {dates}</em></p>
      </div>

      {links && links.length > 0 && (
        <div className={styles.links}>
          <h2 id="links">Links</h2>
          <ul>
            {links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {works && works.length > 0 && (
        <div className={styles.works}>
          <h2 id="works">Works</h2>
          <ul>
            {works.map((work) => (
              <li key={work.title}>
                {work.link
                  ? <Link to={work.link}><strong>{work.title}</strong></Link>
                  : work.id
                  ? <a href={`#${work.id}`}><strong>{work.title}</strong></a>
                  : <strong>{work.title}</strong>
                } <span className={styles.year}>({work.year})</span>
                {work.description && <span> — {work.description}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {children}
    </div>
  );
}