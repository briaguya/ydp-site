import React from "react";
import { withRouteData } from "react-static";
import convert from "htmr";
//

export default withRouteData(({ homepage }) => (
  <div>
    <section>{convert(homepage.contents)}</section>
  </div>
));
