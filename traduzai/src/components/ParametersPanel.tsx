// src/components/ParametersPanel.tsx

import React, {useState} from 'react';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';

const languages = [
    'Africâner',
    'Árabe',
    'Bengali',
    'Chinês (Simplificado)',
    'Chinês (Tradicional)',
    'Dinamarquês',
    'Holandês',
    'Inglês',
    'Francês',
    'Alemão',
    'Grego',
    'Hebraico',
    'Hindi',
    'Indonésio',
    'Italiano',
    'Japonês',
    'Coreano',
    'Norueguês',
    'Polonês',
    'Português',
    'Russo',
    'Espanhol',
    'Sueco',
    'Turco',
    'Ucraniano',
    'Vietnamita',
];

const specialties = [
    'Saúde, Medicina e Psicologia',
    'Matemática',
    'Física',
    'Estatística',
    'Ciência da Computação',
    'Ciência de Dados e Aprendizado de Máquina',
    'Ciências Biológicas',
    'Ciências Sociais',
    'Direito',
    'Engenharia',
    'Administração e Economia',
    'Artes e Humanidades',
    'Comércio e Logística',
];

const styles = ['Formal', 'Informal', 'Técnico', 'Conversacional', 'Persuasivo'];

const availableModels = [
    'gpt-3.5-turbo-0125',
    'gpt-4-turbo',
    'gpt-4o-mini',
    'gpt-4o',
];

const complexityLevels = ['Básico', 'Intermediário', 'Avançado'];

const ParametersPanel = () => {
    const [language, setLanguage] = useState('Português');
    const [specialty, setSpecialty] = useState('Ciência da Computação');
    const [style, setStyle] = useState('Informal');
    const [model, setModel] = useState('gpt-3.5-turbo-0125');
    const [complexity, setComplexity] = useState('Intermediário');
    const [summarize, setSummarize] = useState(false);
    const [focusClarity, setFocusClarity] = useState(false);
    const [focusConciseness, setFocusConciseness] = useState(false);
    const [focusFormality, setFocusFormality] = useState(false);
    const [temperature, setTemperature] = useState(0.8);
    const [maxTokens, setMaxTokens] = useState(1500);

    const handleTranslate = () => {
        // Implement the translation and simplification logic here
        // For now, we can just console.log the parameters
        console.log({
            language,
            specialty,
            style,
            model,
            complexity,
            summarize,
            focusClarity,
            focusConciseness,
            focusFormality,
            temperature,
            maxTokens,
        });
    };

    return (
        <div style={{padding: '10px'}}>
            <Typography variant="h6">Parâmetros</Typography>

            <FormControl fullWidth margin="normal">
                <InputLabel>Idioma de destino</InputLabel>
                <Select
                    value={language}
                    label="Idioma de destino"
                    onChange={(e) => setLanguage(e.target.value as string)}
                >
                    {languages.map((lang) => (
                        <MenuItem key={lang} value={lang}>
                            {lang}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel>Área técnica</InputLabel>
                <Select
                    value={specialty}
                    label="Área técnica"
                    onChange={(e) => setSpecialty(e.target.value as string)}
                >
                    {specialties.map((spec) => (
                        <MenuItem key={spec} value={spec}>
                            {spec}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel>Estilo de escrita</InputLabel>
                <Select
                    value={style}
                    label="Estilo de escrita"
                    onChange={(e) => setStyle(e.target.value as string)}
                >
                    {styles.map((styleOption) => (
                        <MenuItem key={styleOption} value={styleOption}>
                            {styleOption}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel>Modelo OpenAI</InputLabel>
                <Select
                    value={model}
                    label="Modelo OpenAI"
                    onChange={(e) => setModel(e.target.value as string)}
                >
                    {availableModels.map((modelOption) => (
                        <MenuItem key={modelOption} value={modelOption}>
                            {modelOption}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel>Nível de Complexidade</InputLabel>
                <Select
                    value={complexity}
                    label="Nível de Complexidade"
                    onChange={(e) => setComplexity(e.target.value as string)}
                >
                    {complexityLevels.map((level) => (
                        <MenuItem key={level} value={level}>
                            {level}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Typography variant="subtitle1">Focar em:</Typography>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={focusClarity}
                            onChange={(e) => setFocusClarity(e.target.checked)}
                        />
                    }
                    label="Clareza"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={focusConciseness}
                            onChange={(e) => setFocusConciseness(e.target.checked)}
                        />
                    }
                    label="Concisão"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={focusFormality}
                            onChange={(e) => setFocusFormality(e.target.checked)}
                        />
                    }
                    label="Formalidade"
                />
            </FormGroup>

            <Typography variant="subtitle1">Parâmetros da API OpenAI:</Typography>
            <TextField
                label="Temperature"
                type="number"
                inputProps={{step: 0.1}}
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Max Tokens"
                type="number"
                value={maxTokens}
                onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                fullWidth
                margin="normal"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={summarize}
                        onChange={(e) => setSummarize(e.target.checked)}
                    />
                }
                label="Resumir"
            />

            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleTranslate}
                style={{marginTop: '20px'}}
            >
                Simplificar Linguagem e Traduzir
            </Button>
        </div>
    );
};

export default ParametersPanel;
