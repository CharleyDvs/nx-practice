import styles from './sidemenu.module.scss';

/* eslint-disable-next-line */
export interface SidemenuProps {}

const links = [
  {
    id: 'link-1',
    text: 'SITES',
  },
];

export function Sidemenu(props: SidemenuProps) {
  return (
    <div className={styles.sidemenu}>
      <div className={styles.header}>
        <h1>Unlimited School</h1>
      </div>
      <div>
        {links.map((link) => {
          return (
            <p key={link.id} className={styles.link}>
              {link.text}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Sidemenu;
