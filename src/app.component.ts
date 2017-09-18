import {Component} from '@angular/core';

/*
Les compnents sont en ros les controleurs de angulars
ce sont des classes qui seront liées a un template
html et qui declareront en leur sein les propriété et 
méthode accessible au template en question.
*/
@Component({
    //Le sélecteur indique la balise html qui sera liée 
    selector: 'mon-app',
    template: '<h1>{{message}}</h1>', 
})

export class AppComponent {
    private message:string = 'un truc dedans';
}