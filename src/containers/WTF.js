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

export default withRouteData(() => {

  const acronym = acronyms[Math.floor(Math.random()*acronyms.length)]

  return (
    <div>
      <div>{acronym}</div>
    </div>
  );
});
