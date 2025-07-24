import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { FooterComponent } from './shared/footer/footer';

@Component({ 
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, FooterComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'tpPojet';
}




















