// @flow
import { fontSize, palette } from 'pasteup';

const style = {
    color: palette.brandBlueDark,
    fontSize: fontSize.small,
};

export default (props: Object) =>
    <sub style={style}>
        {props.children}
    </sub>;
