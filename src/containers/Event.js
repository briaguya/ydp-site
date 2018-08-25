import React from "react";
import { withRouteData, Link } from "react-static";
import convert from "htmr";
//

export default withRouteData(({ event }) => (
  <div>
    <Link to="/events/">{"<"} Back</Link>
    <br />
    <h3>{event.title}</h3>
    {convert(event.contents)}
  </div>
));
