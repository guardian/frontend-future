/* eslint-disable */

import FaciaCardContainer from './FaciaCardContainer.html';

const targetNode = document.querySelector('.main');

targetNode.innerHTML = '';

const FaciaCardComponent = new FaciaCardContainer({
  target: targetNode,
  data: {
    cardData: [
                {
                    kicker: 'Yahoo hack',
                    headline: '1bn accounts compromised by biggest data breach in history',
                    standfirst: 'The latest incident to emerge – which happened in 2013 – is probably distinct from the breach of 500m user accounts in 2014',
                    tone: 'opinion',
                    showKicker: false
                },
                {
                    kicker: 'Gareth hack',
                    headline: '1 account compromised by smallest data breach in history',
                    standfirst: 'The latest incident to emerge – which happened in 2016',
                    tone: 'news--item',
                    showKicker: true
                },
    ]
  }
});
