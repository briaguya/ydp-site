import { reloadRoutes } from "react-static/node";
import jdown from "jdown";
import chokidar from "chokidar";

chokidar.watch("content").on("all", () => reloadRoutes());

export default {
  getSiteData: () => ({
    title: "React Static"
  }),
  getRoutes: async () => {
    const { upcomingEvents, pastEvents, home, acronyms } = await jdown(
      "content"
    );

    const upcomingRoutes = upcomingEvents.map(event => ({
      path: `/upcoming/${event.slug}`,
      component: "src/containers/Event",
      getData: () => ({
        event
      })
    }));

    const pastRoutes = pastEvents.map(event => ({
      path: `/past/${event.slug}`,
      component: "src/containers/Event",
      getData: () => ({
        event
      })
    }));

    return [
      {
        path: "/",
        component: "src/containers/Home",
        getData: () => ({
          ...home
        })
      },
      {
        path: "/wtf",
        component: "src/containers/WTF"
      },
      {
        path: "/events",
        component: "src/containers/Events",
        getData: () => ({
          upcomingEvents,
          pastEvents
        }),
        children: upcomingRoutes.concat(pastRoutes)
      },
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  }
};
