import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  className?: string;
  'data-testid'?: string;
}

export default function Widget(props: Props) {
  const { children, className, "data-testid": dataTestId } = props;
  return (
    <div data-testid={dataTestId} className={className}>
      <div>This is from App2</div>
      {children}
    </div>
  );
}
