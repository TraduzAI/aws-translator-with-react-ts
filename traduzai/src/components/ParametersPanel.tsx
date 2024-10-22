// src/components/ParametersPanel.tsx

import React, {useState} from 'react';
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    MenuItem,
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
        (<div style={{padding: '10px'}}>
            <Typography variant="h6">Parâmetros</Typography>
            <TextField
                select
                label="Idioma de destino"
                value={language}
                onChange={(e) => setLanguage(e.target.value as string)}
                variant="outlined"
                fullWidth
                margin="normal"
            >
                {languages.map((lang) => (
                    <MenuItem key={lang} value={lang}>
                        {lang}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                select
                label="Área técnica"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value as string)}
                variant="outlined"
                fullWidth
                margin="normal"
            >
                {specialties.map((spec) => (
                    <MenuItem key={spec} value={spec}>
                        {spec}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                select
                label="Estilo de escrita"
                value={style}
                onChange={(e) => setStyle(e.target.value as string)}
                variant="outlined"
                fullWidth
                margin="normal"
            >
                {styles.map((styleOption) => (
                    <MenuItem key={styleOption} value={styleOption}>
                        {styleOption}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                select
                label="Modelo OpenAI"
                value={model}
                onChange={(e) => setModel(e.target.value as string)}
                variant="outlined"
                fullWidth
                margin="normal"
            >
                {availableModels.map((modelOption) => (
                    <MenuItem key={modelOption} value={modelOption}>
                        {modelOption}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                select
                label="Nível de Complexidade"
                value={complexity}
                onChange={(e) => setComplexity(e.target.value as string)}
                variant="outlined"
                fullWidth
                margin="normal"
            >
                {complexityLevels.map((level) => (
                    <MenuItem key={level} value={level}>
                        {level}
                    </MenuItem>
                ))}
            </TextField>
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
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                fullWidth
                margin="normal"
                variant="outlined"
                slotProps={{
                    htmlInput: {step: 0.1}
                }}
            />
            <TextField
                label="Max Tokens"
                type="number"
                value={maxTokens}
                onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                fullWidth
                margin="normal"
                variant="outlined"
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
        </div>)
    );
};

export default ParametersPanel;