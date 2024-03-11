import { RouterOutlet, Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/poke/poke.component';
import { ChuckComponent } from './pages/chuck/chuck.component';
import { NasaComponent } from './pages/nasa/nasa.component';




export const routes: Routes = [

{path: '', component:HomeComponent},
{path: 'clima', component:ClimaComponent},
{path: 'poke', component:PokemonComponent},
{path: 'chuck', component:ChuckComponent},
{path: 'nasa', component:NasaComponent},


{path: '**',redirectTo: '',pathMatch:'full' },

];
