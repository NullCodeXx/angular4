import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//Décorateur apppelé en Java des annotations.
//Application Angular.
@NgModule({
    //Mettre des choses que l'on a pas accès.
     //Lancera le component à cette endroit dans le tableau.
    declarations: [
        AppComponent
    ], //Toutes les functions de notre app doivent est declarer ici.
    imports: [ //Importe les modules que l'on a besoin pour notre application.
        BrowserModule // Pour le HTML, Web.
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}