import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MenuButtonComponent } from '../../../../common/templates/menu-button/menu-button.component';
import { RouterModule } from '@angular/router';
import { AppService } from '../../../../app.service';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
    MenuButtonComponent,
    RouterModule,
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent implements OnInit {
  constructor(public appService: AppService) {
    this.appService.isDefaultLayout.set(false);
  }

  ngOnInit(): void {}
}
