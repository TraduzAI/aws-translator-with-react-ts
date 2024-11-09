// src/components/ParametersPanel.tsx

import React, {useState, useEffect} from 'react';
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    MenuItem,
    TextField,
    Typography,
} from '@mui/material';
import {
    getLanguages,
    getSpecialities,
    getStyles,
    getComplexityLevels,
    getModels,
    translateText,
} from '../api';

import {TranslateResponse} from '../types';

interface Props {
    onTranslate: (data: TranslateResponse) => void;
    inputText: string;
}

const ParametersPanel: React.FC<Props> = ({onTranslate, inputText}) => {
    // State variables for options
    const [languages, setLanguages] = useState<Array<{ name: string; code: string }>>([]);
    const [specialties, setSpecialties] = useState<Array<{ name: string; value: string }>>([]);
    const [styles, setStyles] = useState<Array<{ name: string; value: string }>>([]);
    const [availableModels, setAvailableModels] = useState<Array<{ name: string }>>([]);
    const [complexityLevels, setComplexityLevels] = useState<Array<{ name: string; value: string }>>([]);

    // Selected options
    const [language, setLanguage] = useState('pt'); // Ajuste para o código da língua
    const [specialty, setSpecialty] = useState('Ciência da Computação');
    const [style, setStyle] = useState('Informal');
    const [model, setModel] = useState('gpt-3.5-turbo-0125');
    const [complexity, setComplexity] = useState('Intermediário');
    const [summarize, setSummarize] = useState(false);
    const [focusAspects, setFocusAspects] = useState<string[]>([]);
    const [temperature, setTemperature] = useState(0.8);
    const [maxTokens, setMaxTokens] = useState(1500);

    const [isLoading, setIsLoading] = useState(false);

    // Fetch options from API on component mount
    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const [langs, specs, styls, models, complexities] = await Promise.all([
                    getLanguages(),
                    getSpecialities(),
                    getStyles(),
                    getModels(),
                    getComplexityLevels(),
                ]);

                setLanguages(langs);
                setSpecialties(specs);
                setStyles(styls);
                setAvailableModels(models);
                setComplexityLevels(complexities);
            } catch (error) {
                console.error('Error fetching options:', error);
                alert('Erro ao buscar opções da API.');
            }
        };

        fetchOptions().then(r => r);
    }, []);

    const handleFocusAspectChange = (aspect: string) => {
        setFocusAspects((prev) =>
            prev.includes(aspect)
                ? prev.filter((item) => item !== aspect)
                : [...prev, aspect]
        );
    };

    const handleTranslate = async () => {
        if (!inputText.trim()) {
            alert('Por favor, insira um texto para traduzir.');
            return;
        }

        setIsLoading(true);

        try {
            const params = {
                text: inputText,
                target_language: language,
                speciality: specialty,
                style: style,
                complexity_level: complexity,
                summarize,
                model,
                focus_aspects: focusAspects,
                temperature,
                max_tokens: maxTokens,
            };

            // Call the API
            const data = await translateText(params);

            // Pass the response data to the parent component
            onTranslate(data);

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error('Error during translation:', error);
            alert('Ocorreu um erro durante a tradução.');
        }
    };

    return (
        <div style={{padding: '10px'}}>
            <Typography variant="h6">Parâmetros</Typography>

            {/* Language Selector */}
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
                    <MenuItem key={lang.code} value={lang.code}>
                        {lang.name}
                    </MenuItem>
                ))}
            </TextField>

            {/* Specialty Selector */}
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
                    <MenuItem key={spec.value} value={spec.value}>
                        {spec.name}
                    </MenuItem>
                ))}
            </TextField>

            {/* Style Selector */}
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
                    <MenuItem key={styleOption.value} value={styleOption.value}>
                        {styleOption.name}
                    </MenuItem>
                ))}
            </TextField>

            {/* Model Selector */}
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
                    <MenuItem key={modelOption.name} value={modelOption.name}>
                        {modelOption.name}
                    </MenuItem>
                ))}
            </TextField>

            {/* Complexity Level Selector */}
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
                    <MenuItem key={level.value} value={level.value}>
                        {level.name}
                    </MenuItem>
                ))}
            </TextField>

            {/* Focus Aspects */}
            <Typography variant="subtitle1">Focar em:</Typography>
            <FormGroup>
                {['Clareza', 'Concisão', 'Formalidade'].map((aspect) => (
                    <FormControlLabel
                        key={aspect}
                        control={
                            <Checkbox
                                checked={focusAspects.includes(aspect)}
                                onChange={() => handleFocusAspectChange(aspect)}
                            />
                        }
                        label={aspect}
                    />
                ))}
            </FormGroup>

            {/* OpenAI API Parameters */}
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

            {/* Summarize Checkbox */}
            <FormControlLabel
                control={
                    <Checkbox
                        checked={summarize}
                        onChange={(e) => setSummarize(e.target.checked)}
                    />
                }
                label="Resumir"
            />

            {/* Translate Button */}
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleTranslate}
                disabled={isLoading}
                style={{marginTop: '20px'}}
            >
                {isLoading ? 'Traduzindo...' : 'Simplificar Linguagem e Traduzir'}
            </Button>
        </div>
    );
};

export default ParametersPanel;
