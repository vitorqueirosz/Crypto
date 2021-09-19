import React from 'react';

type ErrorBoundaryState = {
  hasError?: boolean;
};

type ChildrenProps = {
  children: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  constructor(props: ChildrenProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h1>Ops, something went wrong!</h1>;
    }

    return children;
  }
}
