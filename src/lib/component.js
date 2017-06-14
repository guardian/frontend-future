// @flow
import { styled } from 'styletron-preact';

// function that creates whatever kind of object our framework needs
const el = (name: string, style: Object) => styled(name, style);

// eslint-disable-next-line import/prefer-default-export
export { el };
