import React from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ParametersPanel from './components/ParametersPanel';
import TextArea from './components/TextArea';
import TextOutputArea from './components/TextOutputArea';
import MetricsDisplay from './components/MetricsDisplay';
import './App.css';
import {Grid2} from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'light', // Define o modo para 'light'
        primary: {
            main: '#1976d2',
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
    },
    // Outras personalizações do tema
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/> {/* Aplica estilos globais do MUI */}
            <div className="App">
                <Grid2 container spacing={2}>
                    {/* Painel Esquerdo */}
                    <Grid2
                        size={{xs: 12, md: 3}} // Usando 'size' em vez de 'xs' e 'md'
                        sx={{backgroundColor: 'background.paper', padding: 2}}
                    >
                        <ParametersPanel/>
                    </Grid2>

                    {/* Painel do Meio */}
                    <Grid2
                        size={{xs: 12, md: 6}}
                        sx={{backgroundColor: 'background.paper', padding: 2}}
                    >
                        <TextArea/>
                        <TextOutputArea/>
                    </Grid2>

                    {/* Painel Direito */}
                    <Grid2
                        size={{xs: 12, md: 3}}
                        sx={{backgroundColor: 'background.paper', padding: 2}}
                    >
                        <MetricsDisplay/>
                    </Grid2>
                </Grid2>
            </div>
        </ThemeProvider>
    );
}

export default App;
