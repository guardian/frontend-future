// @flow
import style from './style.scss';

export default ({ children, ...props }) =>
    <button
        onClick={() => console.log('clicked the button!!')}
        {...props}
        style={style.button}>
        {children}
    </button>;
