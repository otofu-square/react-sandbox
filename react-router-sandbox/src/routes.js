// @flow
import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import App from './components/App';

const Root = props => {
  console.log(props);
  return (
    <div>
      <h1>Root</h1>
      {/* child routes won't render without this */}
      {renderRoutes(props.route.routes)}
    </div>
  );
};

const Home = props => {
  console.log(props);
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

const Child = props => {
  console.log(props);
  return (
    <div>
      <h2>Child</h2>
      {/* child routes won't render without this */}
      {renderRoutes(props.route.routes, {
        someProp: 'these extra props are optional',
      })}
    </div>
  );
};

const GrandChild = ({ someProp }) => (
  <div>
    <h3>Grand Child</h3>
    <div>{someProp}</div>
  </div>
);

export default [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/child/:id',
        component: Child,
        routes: [
          {
            path: '/child/:id/grand-child',
            component: GrandChild,
          },
        ],
      },
    ],
  },
];
