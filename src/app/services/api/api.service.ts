import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { LanguageService } from '../language/language.service';
import { ApiResponse } from '../../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://dev-highlights-be.vercel.app/api/v1'

  constructor(private http: HttpClient, private languageService: LanguageService) {}

  getProjects(): Observable<ApiResponse> {
    return this.languageService.currentLanguage.pipe(
      switchMap(language => {
        const url = `${this.apiUrl}/projects/lang/${language}`;
        return this.http.get<ApiResponse>(url).pipe(
          catchError(this.handleError)
        );
      })
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('Error en la petición:', error);
    return throwError(() => new Error('Error en la petición'));
  }
}
