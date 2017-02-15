/** @jsx h */

import { h } from 'preact';

export default count => (
  <a className="fc-trail__count fc-trail__count--commentcount" href="https://www.theguardian.com/football/2017/jan/10/fifa-vote-expand-world-cup-48-teams-from-2026#comments" data-link-name="Comment count">
    <span className="inline-tone-fill inline-comment-16 inline-icon">
      <svg width="16" height="16" viewBox="0 0 16 16"><path d="M13 0l1 1v7l-1 1H7l-2 3H4V9H2L1 8V1l1-1h11z" /></svg>
    </span>
    {count}
  </a>
  );
