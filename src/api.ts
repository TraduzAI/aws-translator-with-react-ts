// src/api.ts

import axios from 'axios';
import { TranslateResponse } from './types';

// Defina a base URL da sua API
const API_BASE_URL = 'http://localhost:8000/api'; // Atualize se necessário

// Crie uma instância do axios
const apiClient = axios.create({
    baseURL: API_BASE_URL,
});

// Função para obter idiomas
export const getLanguages = async () => {
    const response = await apiClient.get('/languages/');
    return response.data;
};

// Função para obter especialidades
export const getSpecialities = async () => {
    const response = await apiClient.get('/specialities/');
    return response.data;
};

// Função para obter estilos
export const getStyles = async () => {
    const response = await apiClient.get('/styles/');
    return response.data;
};

// Função para obter complexidade
export const getComplexityLevels = async () => {
    const response = await apiClient.get('/complexity-levels/');
    return response.data;
};

// Função para obter modelos disponíveis
export const getModels = async () => {
    const response = await apiClient.get('/models/');
    return response.data;
};

// Função para traduzir texto
interface TranslateParams {
    text: string;
    target_language: string;
    speciality: string;
    style: string;
    complexity_level: string;
    summarize: boolean;
    model: string;
    focus_aspects: string[];
    temperature: number;
    max_tokens: number;
}

export const translateText = async (params: TranslateParams): Promise<TranslateResponse> => {
    const response = await apiClient.post('/translate/', params);
    return response.data;
};

// Função para importar documento
export const importDocument = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await apiClient.post('/import-document/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};

// Função para exportar documento
interface ExportParams {
    text: string;
    metrics_original: { [key: string]: number };
    metrics_simplified: { [key: string]: number };
    format: string;
}

export const exportDocument = async (params: ExportParams) => {
    const response = await apiClient.post('/export-document/', params, {
        responseType: 'blob', // Importante para downloads de arquivos
    });
    return response.data;
};
