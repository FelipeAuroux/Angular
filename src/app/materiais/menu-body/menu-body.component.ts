import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-body',
  templateUrl: './menu-body.component.html',
  styleUrls: ['./menu-body.component.css']
})
export class MenuBodyComponent {
  menuAberto = false;

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  closeMenu() {
    this.menuAberto = false;
  }
  
  openExternalSite() {
    window.open('https://descomplicagenshin.firebaseapp.com', '_blank');
  }
}

