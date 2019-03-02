import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, API } from '../const';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllContacts() {
    return this.http.request('get', `${BASE_URL}/${API}/contacts/all`);
  }

  addContact(body) {
    return this.http.request('post', `${BASE_URL}/${API}/contacts/add`, { body });
  }

  updateContact(body) {
    return this.http.request('put', `${BASE_URL}/${API}/contacts/update`, { body });
  }

  deleteContact(body) {
    return this.http.request('delete', `${BASE_URL}/${API}/contacts/delete`, { body });
  }
}
