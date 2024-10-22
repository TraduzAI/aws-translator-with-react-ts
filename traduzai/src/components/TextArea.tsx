// src/components/TextArea.tsx

import React, { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import ImportExportButtons from './ImportExportButtons';

const TextArea = () => {
    const [text, setText] = useState('');

    return (
        <div style={{ padding: '10px' }}>
            <Typography variant="h6">Texto para Simplificar e Traduzir:</Typography>
            <TextField
                multiline
                rows={15}
                variant="outlined"
                fullWidth
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ marginTop: '10px' }}
            />
            <ImportExportButtons isInput />
        </div>
    );
};

export default TextArea;
