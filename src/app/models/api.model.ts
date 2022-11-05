export interface SentimentResponse {
  hate: number;
  positive: number;
  neutral: number;
  mixed: number;
}

export type Sentiment = 'positive' | 'neutral' | 'hate' | 'mixed';