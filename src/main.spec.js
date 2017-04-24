import { hello } from './main';

describe('dotcom-future', () => {
    test('it can run tests', () => {
        expect(hello).toEqual('world');
    });
});
