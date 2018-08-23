import React from "react";
import { withRouteData } from "react-static";
import convert from "htmr";
//

export default withRouteData(({ reactStatic }) => (
  <div>
    <section>{convert(reactStatic.contents)}</section>
  </div>
));
