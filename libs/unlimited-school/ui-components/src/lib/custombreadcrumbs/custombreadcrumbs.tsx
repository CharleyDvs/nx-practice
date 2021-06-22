import styles from './custombreadcrumbs.module.scss';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';

/* eslint-disable-next-line */
export interface CustombreadcrumbsProps {}

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export function Custombreadcrumbs(props: CustombreadcrumbsProps) {
  return (
    <Breadcrumbs separator=">" aria-label="breadcrumb">
      <Link
        className={styles.link}
        color="inherit"
        href="#"
        onClick={handleClick}
      >
        Site
      </Link>
      <span className={styles.current}>Pages</span>
    </Breadcrumbs>
  );
}

export default Custombreadcrumbs;
