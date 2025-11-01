import { Component } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({
      error,
      errorInfo,
    })

    // Send error to ErrorReporter if available
    if (window.parent && window.parent !== window) {
      window.parent.postMessage(
        {
          type: 'ERROR_CAPTURED',
          error,
          timestamp: Date.now(),
        },
        '*'
      )
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
    // Try to navigate home
    if (window.location.pathname !== '/') {
      window.location.href = '/'
    }
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      const isDevelopment = import.meta.env.DEV || process.env.NODE_ENV === 'development'

      return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-destructive">
                  Something went wrong!
                </h1>
                <p className="text-muted-foreground">
                  An unexpected error occurred. Don't worry, your data is safe.
                </p>
              </div>
            </div>

            {isDevelopment && this.state.error && (
              <details className="mt-4 text-left border border-border rounded-lg p-4 bg-muted/50">
                <summary className="cursor-pointer text-sm font-medium text-foreground mb-2">
                  Error Details (Development Only)
                </summary>
                <div className="mt-2 space-y-2">
                  <div>
                    <p className="text-xs font-semibold text-destructive mb-1">Error:</p>
                    <pre className="text-xs bg-background p-2 rounded overflow-auto border border-border">
                      {this.state.error.toString()}
                    </pre>
                  </div>
                  {this.state.error.stack && (
                    <div>
                      <p className="text-xs font-semibold text-destructive mb-1">Stack Trace:</p>
                      <pre className="text-xs bg-background p-2 rounded overflow-auto border border-border max-h-40">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )}
                  {this.state.errorInfo?.componentStack && (
                    <div>
                      <p className="text-xs font-semibold text-destructive mb-1">Component Stack:</p>
                      <pre className="text-xs bg-background p-2 rounded overflow-auto border border-border max-h-40">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={this.handleReset}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Button>
              <Button
                onClick={this.handleReload}
                className="gradient-primary text-white flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              If this problem persists, please contact support.
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

