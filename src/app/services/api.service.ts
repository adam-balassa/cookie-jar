import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sentiment, SentimentResponse } from '../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  async getSentiment(text: string): Promise<Sentiment> {
    const response = await this.http.post<SentimentResponse | undefined>(
      'https://407eknu174.execute-api.us-east-1.amazonaws.com/prod/sentiment',
      { text },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    ).toPromise();
    if (response?.hate) return 'hate';
    if (response?.positive) return 'positive';
    if (response?.neutral) return 'neutral';
    return 'mixed';
  }
}