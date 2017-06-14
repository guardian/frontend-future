// @flow
/* eslint-disable no-console */

import styles from './styles.scss';

export default ({ children, ...props }) =>
    <button
        onClick={() => console.log('hello !!')}
        {...props}
        style={styles.button}>
        {children}
    </button>;
