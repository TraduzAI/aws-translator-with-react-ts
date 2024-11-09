// src/components/TextArea.tsx

import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ImportExportButtons from './ImportExportButtons';

interface Props {
    text: string;
    onTextChange: (text: string) => void;
}

const TextArea: React.FC<Props> = ({text, onTextChange}) => {
    return (
        <div style={{padding: '10px'}}>
            <Typography variant="h6">Texto para Simplificar e Traduzir:</Typography>
            <TextField
                multiline
                rows={15}
                variant="outlined"
                fullWidth
                value={text}
                onChange={(e) => onTextChange(e.target.value)}
                style={{marginTop: '10px'}}
            />
            <ImportExportButtons
                isInput={true}
                text={text}
                onTextChange={onTextChange}
            />
        </div>
    );
};

export default TextArea;
