// @flow
/* eslint-disable no-console */

import styles from './button.scss';

export default ({ children, ...props }: { children: ?Array, props: ?Object }) =>
    <button
        onClick={() => console.log('hello !!')}
        {...props}
        style={styles.button}>
        {children}
    </button>;
