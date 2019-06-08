import { HttpClient, HttpResponse, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class CommonRepository<T> {
  protected abstract get _httpClient(): HttpClient;

  protected content: string;

  protected get(url: string, params: any = null): Observable<HttpResponse<T>> {
    return this._httpClient.get<T>(url, {
      observe: "response",
      params: { params },
      withCredentials: false
    });
  }

  protected pageable(
    url: string,
    sort: string,
    order: string,
    page: number,
    size: number
  ): Observable<T> {
    const options = {
      params: new HttpParams()
        .set("page", page.toString())
        .set("size", size.toString())
    };

    return this._httpClient.get<T>(url, options);
  }

  protected post() {}

  protected put() {}

  protected delete() {}
}
