import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider, createTheme} from '@material-ui/core';

import './index.css';
import App from './components/App';

const theme = createTheme({
    palette: {
        primary: {
            main: '#61dafb'
        },
        secondary: {
            main: '#00ff00'
        }
    }
});



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);