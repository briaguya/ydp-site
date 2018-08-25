import { reloadRoutes } from "react-static/node";
import jdown from "jdown";
import chokidar from "chokidar";

chokidar.watch("content").on("all", () => reloadRoutes());

export default {
  getSiteData: () => ({
    title: "React Static"
  }),
  getRoutes: async () => {
    const { events, home, about } = await jdown("content");
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
        component: "src/containers/WTF",
        getData: () => ({
          about
        })
      },
      {
        path: "/events",
        component: "src/containers/Events",
        getData: () => ({
          events
        }),
        children: events.map(event => ({
          path: `/event/${event.slug}`,
          component: "src/containers/Event",
          getData: () => ({
            event
          })
        }))
      },
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  }
};
