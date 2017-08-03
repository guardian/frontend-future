/* eslint-disable flow-header, no-console, global-require, import/no-extraneous-dependencies */

if (process.env.npm_execpath.indexOf('yarn') === -1) {
    console.log(`
        Use Yarn to install, not NPM.

`);
    process.exit(1);
}

try {
    require('check-node-version');
} catch (e) {
    require('child_process')
        .spawn('npm', ['i', 'check-node-version', '--no-save'], {
            stdio: 'inherit',
        })
        .on('close', code => {
            if (code !== 0) process.exit(code);
        });
}
