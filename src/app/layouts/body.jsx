// @flow
import Article from 'views/article';
import { body, side } from './style.scss';

export default () =>
    <body style={body}>
        <div style={side}>
            <Article />
        </div>
    </body>;
