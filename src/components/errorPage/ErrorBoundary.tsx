import React, { Component, ErrorInfo, ReactNode } from 'react';
import ErrorPage from './ErrorPage';
import * as Sentry from '@sentry/react';

interface Props {
  children?: ReactNode;
}

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
  eventId: string | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
      eventId: null
    };
    this.clearState = this.clearState.bind(this);
  }

  static getDerivedStateFromError(_: Error) {
    return { error: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });
    // if(process.env.NODE_ENV === 'production')
    Sentry.withScope((scope) => {
      scope.setTag('Custom-Tag', 'ErrorBoundary');
      scope.setLevel('error');
      scope.setExtra('errorInfo', errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  clearState() {
    this.setState({
      error: null,
      errorInfo: null,
      eventId: null
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorPage clearState={this.clearState} />;
    }

    return this.props.children;
  }
}
