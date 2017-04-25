import { render } from '../lib/component';

import { Title } from './components/title';
import { SubTitle } from './components/subtitle';

const { css, html } = render(
    <Title>
        Hello from Preact!
        <SubTitle>and Styletron!</SubTitle>
    </Title>,
);

console.log(css, html);
