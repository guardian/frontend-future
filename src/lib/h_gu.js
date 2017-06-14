// @flow
/* @jsx h */
/* eslint-disable import/prefer-default-export, camelcase */

// bespoke wrapper around preact's `h` that passes any CSS data
// on `props.style` to styletron, then hands off to `preact#h`

import { h } from 'preact';
import { styled } from 'styletron-preact';

export const h_gu = (node, props, ...rest) => {
    if (props && props.style) {
        const styles = props.style;
        delete props.style;
        const Styled = styled(node, styles);
        return <Styled {...props}>{rest}</Styled>;
    }
    return h.call(null, node, props, rest);
};
