// @flow
import styles from './title.scss';

export default (props: Object) =>
    <h1 style={styles['.title']}>{props.children}</h1>;
