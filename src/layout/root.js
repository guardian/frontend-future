// @flow
import Title from 'components/title';
import SubTitle from 'components/subtitle';
import ButtonHello from 'components/button-hello';

export default () =>
    <div id="root">
        <Title>
            Hello from Preact!<br />
            <ButtonHello>Click me!!!</ButtonHello>
            <input />
            <SubTitle>and Styletron!</SubTitle>
        </Title>
    </div>;
