import type {ReactNode} from 'react';
import styles from './styles.module.css';

type Props = {
  id: string;
  title: string;
  year: string;
  children: ReactNode;
};

export default function WorkDetail({id, title, year, children}: Props) {
  return (
    <div id={id} className={styles.workDetail}>
      <h2>{title} <span className={styles.year}>({year})</span></h2>
      {children}
    </div>
  );
}
