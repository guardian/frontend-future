// @flow
import Title from 'components/title';
import SubTitle from 'components/subtitle';
import Button from 'components/button';

export default () =>
    <div id="root">
        <Title>
            Hello from Preact!<br />
            <Button>Click me!!!</Button>
            <input />
            <SubTitle>and Styletron!</SubTitle>
        </Title>
    </div>;
