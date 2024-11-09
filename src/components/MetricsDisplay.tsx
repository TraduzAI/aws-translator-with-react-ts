// src/components/MetricsDisplay.tsx

import React from 'react';
import {Typography} from '@mui/material';

interface MetricsProps {
    originalMetrics: { [key: string]: number };
    simplifiedMetrics: { [key: string]: number };
    bleuScore: number | null;
}

const MetricsDisplay: React.FC<MetricsProps> = ({
                                                    originalMetrics,
                                                    simplifiedMetrics,
                                                    bleuScore,
                                                }) => {
    return (
        <div style={{padding: '10px'}}>
            <Typography variant="h6">Métricas do Texto Original</Typography>
            {originalMetrics &&
                Object.entries(originalMetrics).map(([key, value]) => (
                    <Typography key={key}>
                        {key}: {value.toFixed(2)}
                    </Typography>
                ))}

            <Typography variant="h6" style={{marginTop: '20px'}}>
                Métricas do Texto Simplificado
            </Typography>
            {simplifiedMetrics &&
                Object.entries(simplifiedMetrics).map(([key, value]) => (
                    <Typography key={key}>
                        {key}: {value.toFixed(2)}
                    </Typography>
                ))}

            {bleuScore !== null && (
                <>
                    <Typography variant="h6" style={{marginTop: '20px'}}>
                        BLEU Score
                    </Typography>
                    <Typography>{bleuScore.toFixed(2)}</Typography>
                </>
            )}
        </div>
    );
};

export default MetricsDisplay;
