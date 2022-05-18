import React, { ReactElement, ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface Props {
  name: string;
  children: ReactNode;
}

export default function RemoteBoundary(props: Props) {
  const { name, children } = props;

  function LoadingFallback(): ReactElement {
    return (
      <div>Loading {name}</div>
    );
  }
  
  function ErrorFallback(): ReactElement {
    return (
      <div role="alert">Unable to load {name}</div>
    );
  }
  
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingFallback />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}
