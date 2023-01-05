import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor() { }
  //private subject = new Subject<any>();

  // sendClickEvent() {
  //   this.subject.next();
  // }

  // getClickEvent(): Observable<any>{
  //   return this.subject.asObservable();
  // }

  isDarkMode:boolean = false;

  darkModeToggle(){
    
    if(this.isDarkMode) {
      
    let element = document.getElementById("divMain");
    let element2 = document.getElementById("divMain2");
    let element3 = document.getElementById("divMain3");
    this.isDarkMode = false;

    for(let single in element){
      element.className = "light-mode";
    }
    for(let single in element2){
      element2.className = "light-mode";
    }
    for(let single in element3){
      element3.className = "light-mode";
    }
    console.log(this.isDarkMode);
    
    
  }else{
  
    let element = document.getElementById("divMain");
    let element2 = document.getElementById("divMain2");
    let element3 = document.getElementById("divMain3");
    
    this.isDarkMode = true;
    
    for(let single in element){
      element.className = "dark-mode";
    }
    for(let single in element2){
      element2.className = "dark-mode";
    }
    for(let single in element3){
      element3.className = "dark-mode";
    }
    
    console.log(this.isDarkMode);
  }

}

}
