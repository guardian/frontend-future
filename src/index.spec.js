import index from './index';

it('renders correctly on the server', () => {
    expect(index()).toMatchSnapshot();
});
