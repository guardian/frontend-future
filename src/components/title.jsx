// @flow

// this module uses an external sass file to manage it's style

import styles from './title.scss';

export default (props: Object) =>
    <h1 style={styles['.title']}>
        {props.children}
    </h1>;
