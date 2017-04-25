// eslint-disable-next-line
import { fontSize, palette } from './styles';

const styletron = new Styletron();

const Title = styled('div', {
    color: palette.brandBlue,
    fontSize: fontSize.default,
});

const SubTitle = styled('div', {
    color: palette.brandBlue,
    fontSize: fontSize.small,
});

const src = render(
    <StyletronProvider styletron={styletron}>
        <Title>
            Hello Preact!
            <SubTitle>qwreqtew</SubTitle>
        </Title>
    </StyletronProvider>,
);

const stylesForHead = styletron.getStylesheetsHtml();

console.log(stylesForHead, src);
