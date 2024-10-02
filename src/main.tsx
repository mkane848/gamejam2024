import { Container, createRoot } from 'react-dom/client';
import App from './App.tsx'

const root = createRoot(document.getElementById('root')! as Container);
root.render(
    <App />
);
