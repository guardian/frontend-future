import { Title } from 'components/title';
import { SubTitle } from 'components/subtitle';

export default () =>
    <div id="root">
        <Title>
            Hello from Preact!<br />
            <button onClick={() => console.log('hello !!')}>Click me!!!</button>
            <input />
            <SubTitle>and Styletron!</SubTitle>
        </Title>
    </div>;
