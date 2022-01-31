import React from 'react';
import '../style.css';
import './Controllers.css';

export default function Controllers({ setValue }) {
  return (
    <nav>
      <div className="profile">
        <img
          src="https://raw.githubusercontent.com/fliderman01/17---time-tracking-dashboard-main/main/images/image-jeremy.png"
          alt="Jeremy smiling"
          width="80px"
          className="jeremyPic"
        />
        <div className="report">
          <span>Report for</span>
          <h3>Jeremy Robson</h3>
        </div>
      </div>
      <ul>
        <li onClick={() => setValue('daily')}>Daily</li>
        <li onClick={() => setValue('weekly')}>Weekly</li>
        <li onClick={() => setValue('monthly')}>Monthly</li>
      </ul>
    </nav>
  );
}
