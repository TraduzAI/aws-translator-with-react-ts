// src/components/TextOutputArea.tsx

import React from 'react';
import {Box, TextField, Typography} from '@mui/material';
import ImportExportButtons from './ImportExportButtons';

const TextOutputArea = () => {
    // Substitua com o texto de saída real do estado ou props
    const outputText = '';

    return (
        <Box sx={{padding: '10px'}}>
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
                sx={{marginTop: '10px'}}
            />
            <ImportExportButtons isInput={false}/>
        </Box>
    );
};

export default TextOutputArea;