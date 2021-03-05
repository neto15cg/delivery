export interface Routes {
  path: string;
  label: string;
  navigable: boolean;
  list?: Routes[];
  icon?: string;
}

export const setRoutes = (value: Routes[]) => {
  (window as any).routes = [];

  Object.assign((window as any).routes, value);
};

export const getRoutes = () => (window as any).routes;

export const findRouteInfo = (pathValue: string): Routes => {
  const globalRoutes = (window as any).routes;
  let label: string = '';
  let icon: string = '';
  let list: Routes[] = [];
  let path: string = '';
  let navigable: boolean = true;

  if (globalRoutes === undefined || pathValue === '') return { label, icon, list, path, navigable: false };

  const buildRouteInfo = (routeObj: Routes) => {
    if (routeObj.path.includes(pathValue)) {
      // eslint-disable-next-line prefer-destructuring
      label = routeObj.label;
      icon = routeObj.icon ? routeObj.icon : '';
      // eslint-disable-next-line prefer-destructuring
      path = routeObj.path;
      // eslint-disable-next-line prefer-destructuring
      navigable = routeObj.navigable;

      if (routeObj.list) {
        // eslint-disable-next-line prefer-destructuring
        list = routeObj.list;
      }
      return { label, icon, list, navigable };
    }

    return routeObj.list && routeObj.list.map((childList: Routes) => buildRouteInfo(childList));
  };

  globalRoutes.map((route) => buildRouteInfo(route));

  return { label, icon, list, path, navigable };
};
