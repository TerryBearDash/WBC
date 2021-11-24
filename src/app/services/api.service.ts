import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjlGOTYyMjhCRjM2RTIyMUQ2ODMyODVFNTFFOEJFOUY0MkJFMDUyNzYiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJuNVlpaV9OdUloMW9Nb1hsSG92cDlDdmdVblkifQ.eyJuYmYiOjE2MjU0OTM2NDIsImV4cCI6MTYyNTQ5NzI0MiwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS53ZWJ1eWNhcnMuY28uemEiLCJhdWQiOlsiaHR0cHM6Ly9pZGVudGl0eS53ZWJ1eWNhcnMuY28uemEvcmVzb3VyY2VzIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJFdm9sdmUuQVBJIiwiRXZhbHVhdGlvbi5BUEkiLCJBdWN0aW9ucy5BUEkiLCJNZWRpYS5BUEkiLCJMTVMuQVBJIiwiQ1JNLkFQSSJdLCJjbGllbnRfaWQiOiJXZWJzaXRlLkIyQy5DbGllbnQiLCJjcm1fcmVhZCI6IjEiLCJzdWIiOiJkZDRhMjc1Ny04YWRkLTRkMGUtYmViOC00NTkzZjM3MDI4YTYiLCJhdXRoX3RpbWUiOjE2MjU0MzMyNDEsImlkcCI6ImxvY2FsIiwiZ2l2ZW5fbmFtZSI6IlRlcnRpdXMgT2xpdmllciIsImZhbWlseV9uYW1lIjoiT2xpdmllciIsIm5hbWUiOiJUZXJ0aXVzIE9saXZpZXIgT2xpdmllciIsInByZWZlcnJlZF91c2VybmFtZSI6WyJUZXJ0aXVzIiwidGVydGl1c29AZ21haWwuY29tIl0sImFjY291bnRfbnVtYmVyIjoiMzIwNTc0IiwiYWNjb3VudF90eXBlIjoicHJpdmF0ZSIsImF1Y3Rpb25fYnV5ZXJfaWQiOiI0OTQ5NiIsImVtYWlsIjoidGVydGl1c29AZ21haWwuY29tIiwicGhvbmVfbnVtYmVyIjoiMDYxNTgyODkzMSIsImNyZWF0ZWRfb24iOjE2MDY5MzIwODAsInNjb3BlIjpbIklkZW50aXR5U2VydmVyQXBpIiwiRXZvbHZlLkFQSSIsIkV2YWx1YXRpb24uQVBJIiwiQXVjdGlvbnMuQVBJIiwiTWVkaWEuQVBJIiwiTE1TLkFQSSIsIkNSTS5BUEkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.jfFbS9bAojTf9-FrF-kkxQ0joUu5orO3CKZ3j1XOUc8SNtRpjjp4pGJMIO2Wi_u88pLqI6CQ61W2JOXYuyxrh1BNo5fw-64-7TnJYK-ZlawaeVt4iGmByq9K9ty1iH-uKSvRYGQSwuZk3ugy7SWn4HvrOLZTQMVKc835_xjtTA-SDoVrXO1egFd_dUarBQIUInbQSE79QkYBri9Pb_ePCg6E3e_mMZJ0VfsiJUIBMq81aVT5JnxevhWQbM5lBYvHSlTdzufZPN6o-R7E9ORxm1ssmeXaspuuHl4uQde1JVHQcb-8dt4vemxzteoudsbjt8qvPxK2_UIpiOnSbTFEVKOM4om0ubfNGdElorV1Y-KGJBNqB1rdBTtGQclWQVzoHFzEj6R7xylroPBuDz6vigq8MpTx7pKUSOl4vmxh7BwcO83z4GBy5a2Rk9IVzXMiJS2eahfq2VvYNhNXG6No0WORhEBLXnDM_-7ZxmS5adjTvv-h3uqmtdlC9QxcQlfNtwFiCHfA8R5kFick1W8OqdTCkoF1KSgfAALmqN9zXGoGGWcMzp99Fm9hc3MTLggXjBV-jjknqangCyNStGTKYl_HfXxaz0FU9n9EOXwS3EMURqUCLHHvNbe1lCvOG9ThYhxRfunpgxkp6zBXW-sR1gQMJzB9J_2JIwdExJBvd2A';

  protected API = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  post(url: string, params: any): Promise<any> {
    return this.http.post(`${this.API}${url}`, params, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).toPromise();
  }

  get(url: string, params: string): Promise<any> {
    return this.http.get(`${this.API}${url}/${params}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).toPromise();
  }

  list(url: string): Promise<any> {
    return this.http.get(`${this.API}${url}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).toPromise();
  }

  put(url: string, params: any): Promise<any> {
    return this.http.put(`${this.API}${url}`, params, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).toPromise();
  }

  delete(url: string): Promise<any> {
    return this.http.delete(`${this.API}${url}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).toPromise();
  }

}
