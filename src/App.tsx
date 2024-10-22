import React, {useMemo, useState, useEffect} from 'react';
import {ThemeProvider, createTheme, PaletteMode} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ParametersPanel from './components/ParametersPanel';
import TextArea from './components/TextArea';
import TextOutputArea from './components/TextOutputArea';
import MetricsDisplay from './components/MetricsDisplay';
import './App.css';
import {Grid2} from '@mui/material';
import {IconButton, Typography} from '@mui/material';
import {Brightness4, Brightness7} from '@mui/icons-material';

function App() {
    // Inicializar o estado com valor salvo no localStorage, se existir
    const [mode, setMode] = useState<PaletteMode>(() => {
        const savedMode = localStorage.getItem('themeMode');
        return savedMode === 'dark' ? 'dark' : 'light';
    });

    // Função para alternar o modo do tema
    const toggleTheme = () => {
        setMode((prevMode) => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            localStorage.setItem('themeMode', newMode);
            return newMode;
        });
    };

    // Criação do tema com base no modo atual
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: '#1976d2',
                    },
                    background: {
                        default: mode === 'light' ? '#f5f5f5' : '#121212',
                        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
                    },
                },
                // Outras personalizações do tema
            }),
        [mode]
    );

    // Efeito para sincronizar o tema com o localStorage quando o componente monta
    useEffect(() => {
        const savedMode = localStorage.getItem('themeMode');
        if (savedMode === 'dark' && mode !== 'dark') {
            setMode('dark');
        }
    }, [mode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/> {/* Aplica estilos globais do MUI */}
            <div className="App">
                {/* Botão de Alternância de Tema */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        padding: '16px',
                    }}
                >
                    <IconButton onClick={toggleTheme} color="inherit">
                        {mode === 'dark' ? <Brightness7/> : <Brightness4/>}
                    </IconButton>
                    <Typography variant="body1" sx={{marginLeft: 1}}>
                        {mode === 'dark' ? 'Modo Claro' : 'Modo Noturno'}
                    </Typography>
                </div>

                {/* Grid Principal */}
                <Grid2 container spacing={2} sx={{padding: 2}}>
                    {/* Painel Esquerdo */}
                    <Grid2
                        size={{xs: 12, md: 3}} // Usando 'size' em vez de 'xs' e 'md'
                        sx={{backgroundColor: 'background.paper', padding: 2, borderRadius: 1}}
                    >
                        <ParametersPanel/>
                    </Grid2>

                    {/* Painel do Meio */}
                    <Grid2
                        size={{xs: 12, md: 6}}
                        sx={{backgroundColor: 'background.paper', padding: 2, borderRadius: 1}}
                    >
                        <TextArea/>
                        <TextOutputArea/>
                    </Grid2>

                    {/* Painel Direito */}
                    <Grid2
                        size={{xs: 12, md: 3}}
                        sx={{backgroundColor: 'background.paper', padding: 2, borderRadius: 1}}
                    >
                        <MetricsDisplay/>
                    </Grid2>
                </Grid2>
            </div>
        </ThemeProvider>
    );
}

export default App;