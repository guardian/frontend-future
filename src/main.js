import { el, render } from '../lib/component';
import { fontSize, palette } from './styles';

const Title = el('h1', {
    color: palette.brandBlue,
    fontSize: fontSize.default,
});

const SubTitle = el('sub', {
    color: palette.brandBlue,
    fontSize: fontSize.small,
});

const { css, html } = render(
    <Title>
        Hello from Preact!
        <SubTitle>and Styletron!</SubTitle>
    </Title>,
);

console.log(css, html);
