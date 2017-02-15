/** @jsx h */
/* eslint react/prop-types 0 */

import { h } from 'preact';
import styled from 'styletron-react';

import Heading from 'generics/Heading';

const FaciaCardContent = ({ kicker, headline, standfirst }) => {
  const ContentWrapper = styled('div', {
    paddingLeft: '0.3125rem',
    paddingRight: '0.3125rem',
  });

  const CardHeader = styled('div', {
    color: '#ffffff',
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    fontFamily: '"Guardian Egyptian Headline", Georgia, serif',
    fontWeight: 'normal',
    fontWeight: 500,
    paddingBottom: '.5e',
  });

  const CardLink = styled('a', {
    color: '#333',
  });

  const CardKicker = styled('span', {
    color: '#005689',
    fontSize: 'inherit',

    ':after': {
      color: 'rgb(214, 214, 214)',
      content: '"/"',
      display: 'inline-block',
      height: '20px',
      margin: '0 3.5px',
      width: '5.5px',
    },
  });

  const CardHeadline = styled('span', {
    color: `${props => props.theme.main}`,
  });

  const CardStandFirst = styled('div', {
    fontSize: '0.875rem',
    lineHeight: '1.125rem',
    fontFamily: '"Guardian Egyptian Text", Georgia,serif',
    fontWeight: 'normal',
    paddingBottom: '.5em',
    color: '#767676',
  });

  const CardFauxBlockLinkOverlay = styled('a', {
    position: 'absolute',
    zIndex: 0,
    opacity: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    textIndent: '200%',
    whiteSpace: 'nowrap',
    background: 'transparent',
  });

  return (
    <ContentWrapper>
      <CardHeader>
        <Heading>
          <CardLink
            href="https://www.theguardian.com/technology/2016/dec/14/yahoo-hack-security-of-one-billion-accounts-breached"
            data-link-name="article"
          />
          <CardKicker>{kicker}</CardKicker>
          <CardHeadline>
            <span className="js-headline-text">{headline}</span>
          </CardHeadline>
        </Heading>
      </CardHeader>

      <CardStandFirst>
        {standfirst}
      </CardStandFirst>

      { /* Mount the meta data component into here client-side with data from attribute */ }
      <aside data-mountComponent="itemMeta" data-componentData="5" />

      {
        /* Mount the meta data component social into
        here client-side when we have data from ajax request */
      }
      <aside data-mountComponent="metaSocial" />

      <CardFauxBlockLinkOverlay
        href="https://www.theguardian.com/technology/2016/dec/14/yahoo-hack-security-of-one-billion-accounts-breached"
        data-link-name="article"
        tabIndex="-1"
      >
        {headline}
      </CardFauxBlockLinkOverlay>
    </ContentWrapper>
  );
};
export default FaciaCardContent;
