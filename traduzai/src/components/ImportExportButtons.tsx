// src/components/ImportExportButtons.tsx

import React from 'react';
import {Button} from '@mui/material';

interface Props {
    isInput: boolean;
}

const ImportExportButtons: React.FC<Props> = ({isInput}) => {
    const handleImport = () => {
        // Implement the import logic here
    };

    const handleExport = () => {
        // Implement the export logic here
    };

    return (
        <div style={{marginTop: '10px'}}>
            {isInput ? (
                <Button variant="contained" color="primary" onClick={handleImport}>
                    Importar Documento
                </Button>
            ) : (
                <Button variant="contained" color="secondary" onClick={handleExport}>
                    Exportar Documento
                </Button>
            )}
        </div>
    );
};

export default ImportExportButtons;
