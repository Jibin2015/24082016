import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: "app-login",
    templateUrl: "app/login/login.component.html"
})

export class LoginComponent implements OnInit{
    
    @Input() username:string;
    @Input() password:string;

    constructor(){        
    }

    ngOnInit(){        
    }

    login(){        
        console.log(this.username);
        console.log(this.password);
    }

}