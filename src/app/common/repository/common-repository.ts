import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class CommonRepository<T> {

    protected abstract get _httpClient(): HttpClient;

    protected get(url: string, params: any = null): Observable<HttpResponse<T>> {
        return this._httpClient.get<T>(
            url, {
                observe: 'response',
                params: { params },
                withCredentials: false
            });
    }

    protected post() {

    }

    protected put() {

    }

    protected delete() {

    }
}
