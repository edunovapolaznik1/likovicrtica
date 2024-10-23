import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LikoviService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  dohvatiSve(){
    return this.http.get<any>(this.baseUrl + 'likcrtica');
  }

  dohvatiPoId(id: any){
    return this.http.get<any>(this.baseUrl + 'likcrtica/' + id);
  }

  spremiNovog(model: any){
    return this.http.post(this.baseUrl + 'likcrtica', model);
  }

  obrisi(id: number){
    return this.http.delete(this.baseUrl + 'likcrtica/'+id);
  }

  azuriraj(model: any){
    console.log(model);
    return this.http.put(this.baseUrl + 'likcrtica/'+ model.id, model);
  }
}
