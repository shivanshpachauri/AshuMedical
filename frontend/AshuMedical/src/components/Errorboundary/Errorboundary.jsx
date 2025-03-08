/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught in Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div
          className=" d-flex justify-content-center alert alert-secondary"
          role="alert"
        >
          <strong>Error caught in Error boundary</strong>
          Either problem with backend Try restarting the backend server or try
          fixing problems with database
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
