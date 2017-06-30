// @flow
import style from './style.scss';

export default ({ children, ...props }) =>
    <button
        style={style.button}
        onClick={() => console.log('clicked the button!!')}
        {...props}
    >
        {children}
    </button>;
