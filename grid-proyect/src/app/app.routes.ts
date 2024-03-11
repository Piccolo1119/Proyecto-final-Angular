import { RouterOutlet, Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/poke/poke.component';
import { ChuckComponent } from './pages/chuck/chuck.component';
import { NasaComponent } from './pages/nasa/nasa.component';
import { JuegoComponent } from './components/juego/juego.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { PantallaComponent } from './components/pantalla/pantalla.component';
import { NavegadorComponent } from './components/navegador/navegador.component';





export const routes: Routes = [

{path: '', component:HomeComponent},
{path: 'clima', component:ClimaComponent},
{path: 'poke', component:PokemonComponent},
{path: 'chuck', component:ChuckComponent},
{path: 'nasa', component:NasaComponent},
{path:'juego', component:JuegoComponent},
{path:'calculadora',component:CalculadoraComponent},
{path:'pantalla', component:PantallaComponent},
{path:'navegador',component:NavegadorComponent},




{path: '**',redirectTo: '',pathMatch:'full' },

];
