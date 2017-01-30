export default {
  containers: [
    {
      title: 'News',
      cardData: [
        {
          kicker: 'Yahoo hack',
          headline: '1bn accounts compromised by biggest data breach in history',
          standfirst: 'The latest incident to emerge – which happened in 2013 – is probably distinct from the breach of 500m user accounts in 2014',
          tone: 'opinion',
          showKicker: false,
        },
        {
          kicker: 'Gareth anti-hack',
          headline: '1 account compromised by smallest data breach in history',
          standfirst: 'The latest incident to emerge – which happened in 2016',
          tone: 'news',
          showKicker: true,
        },
      ],
    },
    {
      title: 'Sport',
      cardData: [
        {
          kicker: 'Football',
          headline: 'That team won that game',
          standfirst: 'Big win from the team from The North',
          tone: 'sport',
          showKicker: false,
        },
        {
          kicker: 'Cricket',
          headline: 'Hit the ball, hit again, hit once more',
          standfirst: '"The most exciting game since sliced bread"',
          tone: 'sport',
          showKicker: true,
        },
      ],
    },
  ],
};
