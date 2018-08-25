import React from "react";
import { withRouteData, Link } from "react-static";
//

export default withRouteData(({ events }) => (
  <div>
    <h1>Events</h1>
    <br />
    All Events:
    <ul>
      {events.map(event => (
        <li key={event.slug}>
          <Link to={`/events/event/${event.slug}/`}>{event.title}</Link>
        </li>
      ))}
    </ul>
  </div>
));
