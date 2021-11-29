import { lazy } from "react";


type JSXComponent =  () => JSX.Element;


interface Route {
    path:string;
    Component:React.LazyExoticComponent<() => JSX.Element> | JSXComponent;
    name:string;
    children?:Route[];
}


const LazyPage1 = lazy(()=> import(/* webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1'));
const LazyPage2 = lazy(()=> import(/* webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
const LazyPage3 = lazy(()=> import(/* webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'));

export const routes : Route[]=[
    {
        path:'/lazy1',
        Component: LazyPage1,
        name:'lazy1',
    },
    {
        path:'/lazy2',
        Component: LazyPage2,
        name:'lazy2',
    },
    {
        path:'/lazy3',
        Component: LazyPage3,
        name:'lazy3',
    },
];