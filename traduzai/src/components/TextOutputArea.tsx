// src/components/TextOutputArea.tsx

import React from 'react';
import { TextField, Typography } from '@mui/material';
import ImportExportButtons from './ImportExportButtons';

const TextOutputArea = () => {
    // Replace with the actual output text from the state or props
    const outputText = '';

    return (
        <div style={{ padding: '10px' }}>
            <Typography variant="h6">Texto Simplificado e Traduzido:</Typography>
            <TextField
                multiline
                rows={15}
                variant="outlined"
                fullWidth
                value={outputText}
                InputProps={{
                    readOnly: true,
                }}
                style={{ marginTop: '10px' }}
            />
            <ImportExportButtons isInput={false} />
        </div>
    );
};

export default TextOutputArea;
