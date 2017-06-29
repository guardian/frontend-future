// @flow

// this guy has inline styles written in JS

import { font, colour } from 'pasteup';

const style = {
    color: colour.brandBlueDark,
    fontSize: font.size.small,
    '@supports (display: flexbox)': {
        float: 'right',
    },
};

export default (props: Object) =>
    <sub style={style}>
        {props.children}
    </sub>;
