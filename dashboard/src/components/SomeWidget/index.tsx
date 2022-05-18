import React from 'react';

import RemoteBoundary from 'components/RemoteBoundary';

// @ts-expect-error app2/Widget is loaded remotely
const App2Widget = React.lazy(() => import('app2/Widget'));

export default function SomeWidget() {
  return (
    <RemoteBoundary name="Widget">
      <App2Widget data-testid="widget">
        This is from the dashboard
      </App2Widget>
    </RemoteBoundary>
  );
}
