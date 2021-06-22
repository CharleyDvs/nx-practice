import styles from './app.module.scss';

import {Sidemenu} from '@nx-practice/unlimited-school/ui-components'

export function App() {
  return (
    <div className={styles.app}>
      <Sidemenu />
    </div>
  );
}

export default App;
