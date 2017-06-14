// @flow
import { el } from 'lib/component';
import { fontSize, palette } from 'pasteup';

export default el('h1', {
    color: palette.brandBlue,
    fontSize: fontSize.default,
    ':hover': { backgroundColor: palette.brandBlueDark },
});
