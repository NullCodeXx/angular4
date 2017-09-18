import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app.module';

//Tourne sur une plateform web et l'app que l'on veut utiliser est AppModule que l'on a exporter.
platformBrowser().bootstrapModule(AppModule);