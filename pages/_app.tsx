import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App({ Component, pageProps }: AppProps) {
  const queryclient = new QueryClient();
  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#673ab7',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#ffeb3b',
        dark: '#ba000d',
        contrastText: '#000',
      }
    }
  })
  return (
    <QueryClientProvider client={queryclient}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
