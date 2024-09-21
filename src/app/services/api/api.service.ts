import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { LanguageService } from '../language/language.service';
import { ApiResponse } from '../../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://demo3565171.mockable.io';

  constructor(private http: HttpClient, private languageService: LanguageService) {}

  getProjects(): Observable<ApiResponse> {
    return this.languageService.currentLanguage.pipe(
      switchMap(language => {
        const url = `${this.apiUrl}/${language}/portfolio/projects/getAll`;
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
