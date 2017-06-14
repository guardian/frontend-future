import { el } from 'lib/component';
import { fontSize, palette } from 'pasteup';

export const Title = el('h1', {
    color: palette.brandBlue,
    fontSize: fontSize.default,
    ':hover': { backgroundColor: palette.brandBlueDark },
});
