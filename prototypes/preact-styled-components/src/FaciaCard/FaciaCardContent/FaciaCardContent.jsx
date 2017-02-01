/** @jsx h */
/* eslint react/prop-types: 0 */

import { h } from 'preact';
import styled from 'styled-components';

import Heading from 'generics/Heading';

const FaciaCardContent = ({ kicker, headline, standfirst, theme }) => {
  const ContentWrapper = styled.div`
    padding-left: 0.3125rem;
    padding-right: 0.3125rem;
  `;

  const CardHeader = styled.div`
    color: #ffffff;
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-family: "Guardian Egyptian Headline", Georgia, serif;
    font-weight: normal;
    font-weight: 500;
    padding-bottom: .5em
  `;

  const CardLink = styled.a`
    color: #333;
  `;

  const CardKicker = styled.span`
    color: #005689; /* Define by property */
    font-size: inherit;

    &:after {
        color: rgb(214, 214, 214);
        content: "/";
        display: inline-block;
        height: 20px;
        margin: 0 3.5px;
        width: 5.5px;
    }
  `;

  const CardHeadline = styled.span`
    color: ${theme.main};
  `;

  const CardStandFirst = styled.div`
    font-size: 0.875rem;
    line-height: 1.125rem;
    font-family: "Guardian Egyptian Text", Georgia,serif;
    font-weight: normal;
    padding-bottom: .5em;
    color: #767676;
  `;

  const CardFauxBlockLinkOverlay = styled.a`
    position: absolute;
    z-index: 0;
    opacity: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    text-indent: 200%;
    white-space: nowrap;
    background: transparent;
  `;

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
