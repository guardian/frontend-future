export default ({ children, ...props }) =>
    <button
        onClick={() => console.log('hello !!')}
        {...props}
        style={style.button}>
        {children}
    </button>;
