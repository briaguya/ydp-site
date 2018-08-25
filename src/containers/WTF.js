import React from "react";
import { withRouteData, Link } from "react-static";

export default withRouteData(({ acronyms, noways }) => {
  const acronym = acronyms[Math.floor(Math.random() * acronyms.length)];
  const noway = noways[Math.floor(Math.random() * noways.length)];

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
