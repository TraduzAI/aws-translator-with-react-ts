// src/components/TextOutputArea.tsx

import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import ImportExportButtons from './ImportExportButtons';

interface Props {
    outputText: string;
    metricsOriginal: { [key: string]: number };
    metricsSimplified: { [key: string]: number };
}

const TextOutputArea: React.FC<Props> = ({ outputText, metricsOriginal, metricsSimplified }) => {
    return (
        <Box sx={{ padding: '10px' }}>
            <Typography variant="h6">Texto Simplificado e Traduzido:</Typography>
            <TextField
                multiline
                rows={15}
                variant="outlined"
                fullWidth
                value={outputText}
                slotProps={{
                    htmlInput: {readOnly: true},
                }}
                sx={{ marginTop: '10px' }}
            />
            <ImportExportButtons
                isInput={false}
                text={outputText}
                metricsOriginal={metricsOriginal}
                metricsSimplified={metricsSimplified}
            />
        </Box>
    );
};

export default TextOutputArea;

