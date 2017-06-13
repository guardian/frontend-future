import render from '../lib/render-client';

import { Title } from './components/title';
import { SubTitle } from './components/subtitle';

render(
    <Title>
        Hello from Preact!<br />
        <SubTitle>and Styletron!</SubTitle>
    </Title>,
    document.getElementById('app')
);
