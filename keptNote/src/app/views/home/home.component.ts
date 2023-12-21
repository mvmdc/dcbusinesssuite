import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../common/templates/header/header.component';
import { AppService } from '../../app.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuButtonComponent } from '../../common/templates/menu-button/menu-button.component';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MenuButtonComponent,
    RouterOutlet,
    MatRippleModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(public appService: AppService) {}

  ngOnInit(): void {}
}
