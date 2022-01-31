import React from 'react';
import '../style.css';
import './Cards.css';

export default function Cards({ index, cards, value }) {
  return (
    <main>
      <section
        style={{
          backgroundColor: cards[index].color,
          backgroundImage: 'url(' + cards[index].pic + ')',
        }}
      >
        <div className="innerSection">
          <div className="up">
            <h4>{cards[index].title}</h4>
            <img
              src="https://raw.githubusercontent.com/fliderman01/17---time-tracking-dashboard-main/49bdc0a88e858b0ca7c05544e806fd12c5c34bdb/images/icon-ellipsis.svg"
              alt="three dots"
            />
          </div>
          <div className="bottom">
            <p className="hours">{cards[index].timeframes[value].current}hrs</p>
            <span>
              last week - {cards[index].timeframes[value].previous}hrs
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
