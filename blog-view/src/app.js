import React from 'react';

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

// export function onRouteChange({ location, routes, action }) {
//   if (action == 'PUSH') {
//     NProgress.start();
//   }
// }
