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
    let element4 = document.getElementById("divMain4");
    let element5 = document.getElementById("divMain5");
    let element6 = document.getElementById("divMain6");
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
    for(let single in element4){
      element4.className = "light-mode";
    }
    for(let single in element5){
      element5.className = "light-mode";
    }
    for(let single in element6){
      element6.className = "light-mode";
    }
    console.log(this.isDarkMode);
    
    
  }else{
  
    let element = document.getElementById("divMain");
    let element2 = document.getElementById("divMain2");
    let element3 = document.getElementById("divMain3");
    let element4 = document.getElementById("divMain4");
    let element5 = document.getElementById("divMain5");
    let element6 = document.getElementById("divMain6");
    
    
    
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
    for(let single in element4){
      element4.className = "dark-mode";
    }
    for(let single in element5){
      element5.className = "dark-mode";
    }
    for(let single in element6){
      element6.className = "dark-mode";
    }
    
    console.log(this.isDarkMode);
  }

}

}
