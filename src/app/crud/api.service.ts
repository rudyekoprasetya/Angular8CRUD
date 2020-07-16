import { Injectable } from '@angular/core';
// import http client module di service 
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { };

  get() {
  	 return this.http.get("http://localhost/rest-api/tampil_data.php");
  }

  save(id,nama,alamat,gender,gaji) {

  	let body="id="+id+"&nama="+nama+"&alamat="+alamat+"&gender="+gender+"&gaji="+gaji;

  	let options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
	};

 	return this.http.post("http://localhost/rest-api/tambah_data.php", body, options);
  }

  getid(id) {
  	return this.http.get("http://localhost/rest-api/tampil_data.php?id="+id);
  }

  update(id,nama,alamat,gender,gaji) {

  	let body="id="+id+"&nama="+nama+"&alamat="+alamat+"&gender="+gender+"&gaji="+gaji;

  	let options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
	};

 	return this.http.post("http://localhost/rest-api/ubah_data.php", body, options);
  }

  delete(id) {
  	return this.http.get("http://localhost/rest-api/hapus_data.php?id="+id);
  }
}
