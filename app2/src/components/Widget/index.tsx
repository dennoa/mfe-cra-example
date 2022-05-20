import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  className?: string;
  'data-testid'?: string;
  context?: {
    namespace?: string;
    host?: string;
  }
}

export default function Widget(props: Props) {
  const { children, className, "data-testid": dataTestId, context } = props;
  return (
    <div data-testid={dataTestId} className={className}>
      <div>This is from App2</div>
      <div>The provided host is {context?.host}</div>
      <div>The provided namespace is {context?.namespace}</div>
      {children}
    </div>
  );
}
