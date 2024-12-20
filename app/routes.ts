import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layout/main-layout.tsx", [
    index("./routes/home/index.tsx"),
    route("test", "./routes/home/test.tsx"),
  ]),
] satisfies RouteConfig;
