export interface PrivateRouteInterface {
    exact? : boolean;
    path: string;
    component: () => JSX.Element;
}