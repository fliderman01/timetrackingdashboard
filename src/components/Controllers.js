import React from 'react';
import '../style.css';
import './Controllers.css';

export default function Controllers({ setValue }) {
  return (
    <div>
      <nav>
        <img
          src="https://raw.githubusercontent.com/fliderman01/17---time-tracking-dashboard-main/main/images/image-jeremy.png"
          alt="Jeremy smiling"
          width="100px"
        />
        <span>Report for</span>
        <p>Jeremy Robson</p>
        <ul>
          <li onClick={() => setValue('daily')}>Daily</li>
          <li onClick={() => setValue('weekly')}>Weekly</li>
          <li onClick={() => setValue('monthly')}>Monthly</li>
        </ul>
      </nav>
    </div>
  );
}
