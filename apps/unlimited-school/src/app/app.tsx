import styles from './app.module.scss';

import { Sidemenu } from '@nx-practice/unlimited-school/ui-components';
import { CustomTable } from '@nx-practice/unlimited-school/ui-components';
import { Custombreadcrumbs } from '@nx-practice/unlimited-school/ui-components';

export function App() {
  return (
    <div className={styles.app}>
      <Sidemenu />
      <div className={styles.interface}>
        <Custombreadcrumbs />
        <h1>Your pages</h1>
        <p>Design and build pages for your school and products</p>
        <h2>Main</h2>
        <CustomTable />
      </div>
    </div>
  );
}

export default App;
