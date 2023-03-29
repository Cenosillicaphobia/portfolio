import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  response:any = {
    data : {name: '', email: '', message: ''},
    message : "",
    success : false
  }

  constructor ( private http: HttpClient ){}

  send( form:NgForm ){

    function setData(){
      let data = {
        access_key: '2e1cff23-36b6-404b-a457-3d182bac81c5',
          name: form.value.name,
          email: form.value.email,
          message: form.value.message
      }
      return data
    }

    return this.http.post("https://api.web3forms.com/submit", setData(), { headers : {"Content-Type": "application/json", Accept: "application/json"}})
    .subscribe( response => { 
      this.response = response; 
      if(this.response.success == true){ alert( this.response.message)}
      else{ alert( "The email form doesn't work")}
    })

  }

}
