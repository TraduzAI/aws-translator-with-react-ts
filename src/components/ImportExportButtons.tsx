// src/components/ImportExportButtons.tsx

import React from 'react';
import {Button} from '@mui/material';
import {importDocument, exportDocument} from '../api';

interface Props {
    isInput: boolean;
    text: string;
    onTextChange?: (text: string) => void;
    metricsOriginal?: { [key: string]: number };
    metricsSimplified?: { [key: string]: number };
}

const ImportExportButtons: React.FC<Props> = ({
                                                  isInput,
                                                  text,
                                                  onTextChange,
                                                  metricsOriginal,
                                                  metricsSimplified,
                                              }) => {
    const handleImport = async () => {
        // Create a file input element
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.txt,.pdf,.docx,.epub';

        input.onchange = async (event: any) => {
            const file = event.target.files[0];
            if (file && onTextChange) {
                try {
                    const data = await importDocument(file);
                    onTextChange(data.text);
                } catch (error) {
                    console.error('Error importing document:', error);
                    alert('Erro ao importar documento.');
                }
            }
        };

        input.click();
    };

    const handleExport = async () => {
        if (!text.trim()) {
            alert('Não há texto para exportar.');
            return;
        }

        // Ask user for the desired format
        const format = prompt('Digite o formato de exportação (pdf, docx, txt):', 'pdf');
        if (!format) return;

        try {
            const data = await exportDocument({
                text,
                metrics_original: metricsOriginal || {},
                metrics_simplified: metricsSimplified || {},
                format,
            });

            // Create a blob and download the file
            const blob = new Blob([data], {type: 'application/octet-stream'});
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `output.${format}`);
            document.body.appendChild(link);
            link.click();
            link.parentNode?.removeChild(link);
        } catch (error) {
            console.error('Error exporting document:', error);
            alert('Erro ao exportar documento.');
        }
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
