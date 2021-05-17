import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category.model';
import { Device } from 'src/app/model/device.model';
import { environment } from 'src/environments/environment';
import { DeviceDto } from './device.dto';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  public pathUrl = `${environment.url}`;

  public findAllUsingGet(): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.pathUrl}/device`);
  }

  public findByIdUsingGet(id: string): Observable<Device> {

    return this.http.get<Device>(`${this.pathUrl}/device/${id}`);
  }

  public DeleteByIdUsingDelete(id: string): Observable<Device> {

    return this.http.delete<Device>(`${this.pathUrl}/device/${id}`);
  }

  public CreateUsingPost(device: DeviceDto): Observable<Device> {

    return this.http.post<Device>(`${this.pathUrl}/device`, device);
  }
}
