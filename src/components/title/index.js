// @flow
import styles from './styles.scss';

export default (props: Object) =>
    <h1 style={styles['.title']}>
        {props.children}
    </h1>;
