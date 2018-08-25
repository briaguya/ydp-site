import React from "react";
import { withRouteData, Link } from "react-static";
import convert from "htmr";
//

const acronyms = [
  "Degenerate Austin Degenerates",
  "Dancing at Dawn",
  "Dancing after Dark",
  "Dope and Dope & Tight"
];

const noways = [
  "No way",
  "But seriously...",
  "That can't be real",
  "What does it really mean though?",
  "I don't believe you"
];

export default withRouteData(() => {

  const acronym = acronyms[Math.floor(Math.random()*acronyms.length)]
  const noway = noways[Math.floor(Math.random()*noways.length)]

  return (
    <div>
    <h1 className="wtf__title">What does D.A.D. stand for?</h1>
      <div className="wtf__acronym">{acronym}</div>
      <div className="wtf__button">
        <Link to="/wtf">{noway}</Link>
      </div>
    </div>
  );
});
