import { render } from '../lib/component';

import { Title } from './components/title';
import { SubTitle } from './components/subtitle';

export default () => render(
    <Title>
        Hello from Preact!
        <SubTitle>and Styletron!</SubTitle>
    </Title>,
);
