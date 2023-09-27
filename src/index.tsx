import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary/ui'

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>

    </BrowserRouter>,
    document.getElementById('root')
)
