import React from 'react';

import RemoteBoundary from 'components/RemoteBoundary';
import hosts from 'config/modulefederation.hosts.json';

// @ts-expect-error app2/Widget is loaded remotely
const App2Widget = React.lazy(() => import('app2/Widget'));

const { app2: host } = hosts;
const namespace = 'app2widget';

export default function SomeWidget() {
  return (
    <RemoteBoundary name="Widget">
      <App2Widget data-testid="widget" context={{ host, namespace }}>
        This text is from the dashboard
      </App2Widget>
    </RemoteBoundary>
  );
}
