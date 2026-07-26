import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { ThemeProvider } from './hooks/themeHook/themeContext';
import ServerRoutes from './routes/ServerRoutes';
import './styles/main.scss';

export function render(url) {
  return renderToString(
    <ThemeProvider>
      <StaticRouter location={url}>
        <ServerRoutes />
      </StaticRouter>
    </ThemeProvider>,
  );
}
