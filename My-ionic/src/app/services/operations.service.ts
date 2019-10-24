import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // à importer

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private http: HttpClient) { }

  // Operation envoie
 
    private  endpoint = 'http://127.0.0.1:8000/api/envoie';

    envoie(formData){

    const formData1: FormData = new FormData;

    formData1.append('nomE', formData.nomE);
    formData1.append('prenomE', formData.prenomE);
    formData1.append('telE', formData.telE);
    formData1.append('nomEx', formData.nomEx);
    formData1.append('prenomEx', formData.prenomEx);
    formData1.append('telephoneEx', formData.telephoneEx);
    formData1.append('adresseEx', formData.adresseEx);
    formData1.append('montant', formData.montant);
    console.log(formData);
    return this.http.post(this.endpoint, formData1);
  }
  
  // Operation retrait

    private  endpoint1 = 'http://127.0.0.1:8000/api/retrait';

    retrait(formData){

    const formData2: FormData = new FormData;

    formData2.append('code', formData.code);
    formData2.append('cni', formData.cni);
    console.log(formData);
    return this.http.post(this.endpoint1, formData2);
  }
}
