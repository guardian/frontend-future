// @flow
/* eslint-disable flow-header, no-console */

if (
    process &&
    process.env &&
    process.env.npm_execpath &&
    process.env.npm_execpath.indexOf('yarn') === -1
) {
    console.log(`
        Use Yarn to install, not NPM.

`);
    process.exit(1);
}
