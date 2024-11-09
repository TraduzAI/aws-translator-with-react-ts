// src/types.ts

export interface TranslateResponse {
    translated_text: string;
    metrics_original: { [key: string]: number };
    metrics_simplified: { [key: string]: number };
    bleu_score: number;
    source_language_code: string;
}
