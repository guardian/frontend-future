// @flow
import Article from 'views/article.jsx';

const sideStyle = {
    content: '""',
    position: 'absolute',
    zIndex: 1,
    background: 'rgba(51,51,51,0.05)',
    top: 0,
    height: '100%',
    width: 'calc((100% - 46.25rem) / 2)',
};

const sideMarginStyle = {
    position: 'relative',
    height: '100%',
    ':before': Object.assign({}, { left: 0 }, sideStyle),
    ':after': Object.assign({}, { right: 0 }, sideStyle),
};

const bodyStyle = {
    backgroundColor: '#fff',
    textRendering: 'optimizeLegibility',
    fontFeatureSettings: 'kern',
    fontKerning: 'normal',
    lineHeight: '1.5',
    color: '#333',
};

export default () =>
    <body style={bodyStyle}>
        <div style={sideMarginStyle}>
            <Article />
        </div>
    </body>;
