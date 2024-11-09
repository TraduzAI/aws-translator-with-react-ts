import React, {useMemo, useState} from 'react';
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
import {TranslateResponse} from "./types";

function App() {
    // Initialize theme mode from localStorage
    const [mode, setMode] = useState<PaletteMode>(() => {
        const savedMode = localStorage.getItem('themeMode');
        return savedMode === 'dark' ? 'dark' : 'light';
    });

    // Function to toggle theme
    const toggleTheme = () => {
        setMode((prevMode) => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            localStorage.setItem('themeMode', newMode);
            return newMode;
        });
    };

    // Create theme based on current mode
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
            }),
        [mode]
    );

    // State to hold text input and output
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    // State to hold metrics
    const [metricsOriginal, setMetricsOriginal] = useState<{ [key: string]: number }>({});
    const [metricsSimplified, setMetricsSimplified] = useState<{ [key: string]: number }>({});
    const [bleuScore, setBleuScore] = useState<number | null>(null);


    // Função para lidar com o resultado da tradução
    const handleTranslateResult = (data: TranslateResponse) => {
        setOutputText(data.translated_text);
        setMetricsOriginal(data.metrics_original);
        setMetricsSimplified(data.metrics_simplified);
        setBleuScore(data.bleu_score);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="App">
                {/* Theme Toggle Button */}
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

                {/* Main Grid */}
                <Grid2 container spacing={2} sx={{padding: 2}}>
                    {/* Left Panel */}
                    <Grid2
                        size={{xs: 12, md: 3}} // Usando 'size' em vez de 'xs' e 'md'
                        sx={{backgroundColor: 'background.paper', padding: 2, borderRadius: 1}}
                    >
                        <ParametersPanel
                            onTranslate={handleTranslateResult}
                            inputText={inputText}
                        />
                    </Grid2>

                    {/* Middle Panel */}
                    <Grid2
                        size={{xs: 12, md: 6}} // Usando 'size' em vez de 'xs' e 'md'
                        sx={{backgroundColor: 'background.paper', padding: 2, borderRadius: 1}}
                    >
                        <TextArea
                            text={inputText}
                            onTextChange={setInputText}
                        />
                        <TextOutputArea
                            outputText={outputText}
                            metricsOriginal={metricsOriginal}
                            metricsSimplified={metricsSimplified}
                        />
                    </Grid2>

                    {/* Right Panel */}
                    <Grid2
                        size={{xs: 12, md: 3}} // Usando 'size' em vez de 'xs' e 'md'
                        sx={{backgroundColor: 'background.paper', padding: 2, borderRadius: 1}}
                    >
                        <MetricsDisplay
                            originalMetrics={metricsOriginal}
                            simplifiedMetrics={metricsSimplified}
                            bleuScore={bleuScore}
                        />
                    </Grid2>
                </Grid2>
            </div>
        </ThemeProvider>
    );
}

export default App;