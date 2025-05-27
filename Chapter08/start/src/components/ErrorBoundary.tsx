'use client';
import type { ReactNode } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { ErrorAlert } from './ErrorAlert';

export function ErrorBoundary({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorAlert}
      onError={(error, info) => {
        console.error('Unexpected error', {
          error,
          info,
        });
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
