import index from './index';

document.body.innerHTML = `
    <style class="_styletron_hydrate_"></style>
    <div id="app"></div>
`;

it('renders correctly on the server', () => {
    expect(index()).toMatchSnapshot();
});

it('renders correctly in the browser', () => {
    global.BROWSER = true;
    global.SERVER = false;
    expect(index()).toMatchSnapshot();
});
