import React from "react";
import { withRouteData, Link } from "react-static";

export default withRouteData(({ acronyms, noways }) => (
  <div>
    <h1 className="wtf__title">All the ones we have so far</h1>
    <ul>{acronyms.map(acronym => <li>{acronym}</li>)}</ul>
    <a href="https://github.com/briaguya/ydp-site/blob/master/content/wtf/acronyms.js">
      Edit on GitHub
    </a>
  </div>
));
