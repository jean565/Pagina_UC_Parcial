import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { Aside } from './Components/aside/aside';
import { Main } from './Components/main/main';
import { Footer } from './Components/footer/footer';
import { HeaderMatricula } from './Components/header-matricula/header-matricula';
import { HeaderProgramas } from './Components/header-programas/header-programas';
import { HeaderInicio } from './Components/header-inicio/header-inicio';
import { MainDocentes } from './Components/main-docentes/main-docentes';
import { MainExperiencias } from './Components/main-experiencias/main-experiencias';
import { MainInicio } from './Components/main-inicio/main-inicio';
import { MainMatricula } from './Components/main-matricula/main-matricula';
import { MainNoticias } from './Components/main-noticias/main-noticias';

@Component({
  imports: [RouterOutlet, Header, Aside, Main, Footer, HeaderMatricula, HeaderProgramas, HeaderInicio, MainDocentes, MainExperiencias, MainInicio, MainMatricula, MainNoticias],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Pagina_UC_Parcial');
}
