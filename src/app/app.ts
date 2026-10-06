import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { Aside } from './Components/aside/aside';
import { Main } from './Components/main/main';
import { Footer } from './Components/footer/footer';

@Component({
  imports: [RouterOutlet, Header, Aside, Main, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Pagina_UC_Parcial');
}
