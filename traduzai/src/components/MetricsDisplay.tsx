// src/components/MetricsDisplay.tsx

import React from 'react';
import { Typography } from '@mui/material';

const MetricsDisplay = () => {
    // Placeholder for the metrics data
    const originalMetrics = {
        'Índice de Flesch Reading Ease': 0,
        'Grau de Flesch-Kincaid': 0,
        'Índice SMOG': 0,
        'Índice de Coleman-Liau': 0,
        'Índice ARI': 0,
        'Pontuação de Dale-Chall': 0,
    };

    const simplifiedMetrics = {
        'Índice de Flesch Reading Ease': 0,
        'Grau de Flesch-Kincaid': 0,
        'Índice SMOG': 0,
        'Índice de Coleman-Liau': 0,
        'Índice ARI': 0,
        'Pontuação de Dale-Chall': 0,
        'BLEU Score': 0,
    };

    return (
        <div style={{ padding: '10px' }}>
            <Typography variant="h6">Métricas do Texto Original</Typography>
            {Object.entries(originalMetrics).map(([key, value]) => (
                <Typography key={key}>
                    {key}: {value}
                </Typography>
            ))}

            <Typography variant="h6" style={{ marginTop: '20px' }}>
                Métricas do Texto Simplificado
            </Typography>
            {Object.entries(simplifiedMetrics).map(([key, value]) => (
                <Typography key={key}>
                    {key}: {value}
                </Typography>
            ))}
        </div>
    );
};

export default MetricsDisplay;
