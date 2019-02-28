import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, API } from '../const';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllContacts() {
    return this.http.get(`${BASE_URL}/${API}/contacts/all`);
  }

  addContact(data) {
    return this.http.post(`${BASE_URL}/${API}/contacts/add`, data);
  }

  updateContact(data) {
    return this.http.put(`${BASE_URL}/${API}/contacts/update`, data);
  }

  deleteContact(data) {
    return this.http.delete(`${BASE_URL}/${API}/contacts/delete`, data);
  }
}
