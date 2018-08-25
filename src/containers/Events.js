import React from "react";
import { withRouteData, Link } from "react-static";
//

export default withRouteData(({ upcomingEvents, pastEvents }) => (
  <div>
    <h1>Events</h1>
    <br />
    Upcoming Events:
    <ul>
      {upcomingEvents.map(event => (
        <li key={event.slug}>
          <Link to={`/events/upcoming/${event.slug}/`}>{event.title}</Link>
        </li>
      ))}
    </ul>
    <br />
    Past Events:
    <ul>
      {pastEvents.map(event => (
        <li key={event.slug}>
          <Link to={`/events/past/${event.slug}/`}>{event.title}</Link>
        </li>
      ))}
    </ul>
  </div>
));
