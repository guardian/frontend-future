_This repo is no longer under development. Work has moved to https://github.com/guardian/guui._



# guui 

[![Build Status](https://travis-ci.org/guardian/frontend-future.svg?branch=master)](https://travis-ci.org/guardian/frontend-future) [![Coverage Status](https://coveralls.io/repos/github/guardian/frontend-future/badge.svg?branch=master)](https://coveralls.io/github/guardian/frontend-future?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/guardian/frontend-future/badge.svg)](https://snyk.io/test/github/guardian/frontend-future) [![dependencies Status](https://david-dm.org/guardian/frontend-future/status.svg)](https://david-dm.org/guardian/frontend-future) [![devDependencies Status](https://david-dm.org/guardian/frontend-future/dev-status.svg)](https://david-dm.org/guardian/frontend-future?type=dev)

An investigation into the future architecture of theguardian.com.

[![#dotcom-future](https://img.shields.io/badge/slack-%23dotcom–future-ff69b4.svg?link=https://theguardian.slack.com/messages/C0JES5PEV)](https://theguardian.slack.com/messages/C0JES5PEV)

## Compilation

_needs to be formalised still_

## Howtos

### Use an SVG

Import the SVG as normal.

```jsx
import MySVG from './my-svg.svg';
```

It will be loaded using `frontend/ui/__tools__/svg-loader.js`, which runs it through SVGO then returns it as a JSX object.

You can use the JSXified SVG as a normal JSX import:

```xml
<!-- my-svg.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="320" height="60"><path ... /></svg>
```

```jsx
import MySVG from './my-svg.svg';

export default () => <div><MySVG /></div>;

// <div><svg width="320" height="60"><path ... /></svg></div>

```
#### Styling the SVG
It will also respond to an object on a `block-styles` prop:

```jsx
<MySVG block-styles={{ red: { fill: "red" } }} />;
```
If a node in the original SVG has a `data-block` attribute, the loader will look for a key in the `styles` object that matches the value of `data-block`, and apply the styles inline:

```xml
<!-- my-svg.svg -->
<svg><path data-block="red" /></svg>
```

```jsx
import MySVG from './my-svg.svg';

const styles = {
	red: { color: 'red' }
}

export default () => <MySVG block-styles={styles} />

// <svg><path data-block="red" style="color: red" /></svg>

```

You can use Sass in a similar way to non-SVG components:

```xml
<!-- my-svg.svg -->
<svg><path data-block="red" /></svg>
```

```scss
// styles.js.scss
red {
    fill: 'red'
}
```

```jsx
import MySVG from './my-svg.svg';
import styles from './styles.js.scss';

export default () => <MySVG block-styles={styles} />

// <svg><path data-block="red" style="fill: red" /></svg>

```
