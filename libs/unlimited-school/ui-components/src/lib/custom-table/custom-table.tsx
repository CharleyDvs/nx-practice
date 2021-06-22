import styles from './custom-table.module.scss';

/* eslint-disable-next-line */
export interface CustomTableProps {}

export interface Row {
  id: number;
  title: string;
  pageUrl: string;
  version: string;
  state: string;
  actions: string;
}

const columns = [
  { field: 'title', headerName: 'TITLE' },
  { field: 'pageUrl', headerName: 'PAGE URL' },
  { field: 'version', headerName: 'VERSION' },
  { field: 'state', headerName: 'STATE' },
  { field: 'actions', headerName: 'ACTIONS' },
];

const rows: Row[] = [
  {
    id: 1,
    title: 'Privacy Policy',
    pageUrl: '/privacy',
    version: '1.0',
    state: 'published',
    actions: 'edit',
  },
  {
    id: 2,
    title: 'Home',
    pageUrl: '/home',
    version: '1.0',
    state: 'published',
    actions: 'edit',
  },
  {
    id: 3,
    title: 'Terms',
    pageUrl: '/terms',
    version: '1.0',
    state: 'published',
    actions: 'edit',
  },
];

export function CustomTable(props: CustomTableProps) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {columns.map((column) => (
          <div key={column.field} className={styles.colTitle}>
            {column.headerName}
          </div>
        ))}
      </div>
      {rows.map((row) => {
        return (
          <div className={styles.row} key={`row-${row.id}`}>
            {columns.map((column) => {
              const keyValue = column.field as keyof Row;
              if (keyValue === 'state') {
                return (
                  <div className={styles.col}>
                    <div className={styles[row[keyValue]]}>{row[keyValue]}</div>
                  </div>
                );
              }
              if (keyValue === 'actions') {
                return (
                  <div className={styles.col}>
                    <button className={styles.button}>Edit</button>
                  </div>
                );
              }
              return <div className={styles.col}>{row[keyValue]}</div>;
            })}
          </div>
        );
      })}
      <div className={styles.row}>
        <button className={styles.addbtn}>Add New Page</button>
      </div>
    </div>
  );
}

export default CustomTable;
