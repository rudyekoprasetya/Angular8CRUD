import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
  providers: [ApiService]
})
export class CrudComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  	this.tampilData();
  }

  // untuk menampung data
  dataSource:any = []; 
  id:string;
  nama:string;
  alamat:string;
  gender:string;
  gaji:string;

  idEdit:string;
  namaEdit:string;
  alamatEdit:string;
  genderEdit:string;
  gajiEdit:string;



  tampilData() {
  	this.api.get().subscribe(result=>{
  	  this.dataSource=result;	
      // console.log(result);
    },error=>{
      console.log(error);
    })
  }

  simpanData() {  	
  	this.api.save(this.id,this.nama,this.alamat,this.gender,this.gaji).subscribe(result=>{
  		console.log(result);
  		this.clearForm();
  		this.tampilData();
  	},error=>{
  		console.log(error);
  	})
  }

  clearForm(): void {
  	this.id="";
  	this.nama="";
  	this.alamat="";
  	this.gender="";
  	this.gaji="";
  }

  editData(id) {
  	let id_pengurus=id;
  	this.api.getid(id_pengurus).subscribe(result=>{
      // console.log(result);
      this.idEdit=result[0].id;
	  this.namaEdit=result[0].nama;
	  this.alamatEdit=result[0].alamat;
	  this.genderEdit=result[0].gender;
	  this.gajiEdit=result[0].gaji;
    },error=>{
      console.log(error);
    })
  }

  ubahData() {
  	this.api.update(this.idEdit,this.namaEdit,this.alamatEdit,this.genderEdit,this.gajiEdit).subscribe(result=>{
  		console.log(result);
  		this.clearForm();
  		this.tampilData();
  	},error=>{
  		console.log(error);
  	})
  }

  hapusData(id) {
  	let id_pengurus=id;
  	this.api.delete(id_pengurus).subscribe(result=>{
      console.log(result);      
  	  this.tampilData();
    },error=>{
      console.log(error);
    })
  }

}
