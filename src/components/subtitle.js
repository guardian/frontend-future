// @flow
import { fontSize, palette } from 'pasteup';

const style = {
    color: palette.brandBlueDark,
    fontSize: fontSize.small,
    '@supports (flex)': {
        float: 'right',
    },
};

export default (props: Object) =>
    <sub style={style}>
        {props.children}
    </sub>;
