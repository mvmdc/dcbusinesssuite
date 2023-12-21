import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { AppService } from '../../../../app.service';
import { RouterModule } from '@angular/router';
import { MenuButtonComponent } from '../../../../common/templates/menu-button/menu-button.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatRippleModule,
    MatIconModule,
    RouterModule,
    MenuButtonComponent,
    MatTooltipModule,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  employees = [
    {
      id: 1,
      employeeCode: '001',
      employeeStatus: 'Present',
      employeeName: 'Muthuvel Pandiyan',
      employeePosition: 'Manager',
      employeeMobile: 9876543210,
      employeeEmail: 'muthuvel@domain.com',
      employeeAddress: 'Address 1, Address 2, City name, Pin Code - 000 000.',
      isAbsent: false,
    },
    {
      id: 2,
      employeeCode: '001',
      employeeStatus: 'Present',
      employeeName: 'Muthuvel Pandiyan',
      employeePosition: 'Manager',
      employeeMobile: 9876543210,
      employeeEmail: 'muthuvel@domain.com',
      employeeAddress: 'Address 1, Address 2, City name, Pin Code - 000 000.',
      isAbsent: false,
    },
    {
      id: 3,
      employeeCode: '001',
      employeeStatus: 'Present',
      employeeName: 'Muthuvel Pandiyan',
      employeePosition: 'Manager',
      employeeMobile: 9876543210,
      employeeEmail: 'muthuvel@domain.com',
      employeeAddress: 'Address 1, Address 2, City name, Pin Code - 000 000.',
      isAbsent: false,
    },
    {
      id: 4,
      employeeCode: '001',
      employeeStatus: 'Present',
      employeeName: 'Muthuvel Pandiyan',
      employeePosition: 'Manager',
      employeeMobile: 9876543210,
      employeeEmail: 'muthuvel@domain.com',
      employeeAddress: 'Address 1, Address 2, City name, Pin Code - 000 000.',
      isAbsent: false,
    },
    {
      id: 5,
      employeeCode: '001',
      employeeStatus: 'Present',
      employeeName: 'Muthuvel Pandiyan',
      employeePosition: 'Manager',
      employeeMobile: 9876543210,
      employeeEmail: 'muthuvel@domain.com',
      employeeAddress: 'Address 1, Address 2, City name, Pin Code - 000 000.',
      isAbsent: false,
    },
    {
      id: 6,
      employeeCode: '001',
      employeeStatus: 'Present',
      employeeName: 'Muthuvel Pandiyan',
      employeePosition: 'Manager',
      employeeMobile: 9876543210,
      employeeEmail: 'muthuvel@domain.com',
      employeeAddress: 'Address 1, Address 2, City name, Pin Code - 000 000.',
      isAbsent: false,
    },
    {
      id: 7,
      employeeCode: '001',
      employeeStatus: 'Present',
      employeeName: 'Muthuvel Pandiyan',
      employeePosition: 'Manager',
      employeeMobile: 9876543210,
      employeeEmail: 'muthuvel@domain.com',
      employeeAddress: 'Address 1, Address 2, City name, Pin Code - 000 000.',
      isAbsent: false,
    },
    {
      id: 8,
      employeeCode: '001',
      employeeStatus: 'Present',
      employeeName: 'Muthuvel Pandiyan',
      employeePosition: 'Manager',
      employeeMobile: 9876543210,
      employeeEmail: 'muthuvel@domain.com',
      employeeAddress: 'Address 1, Address 2, City name, Pin Code - 000 000.',
      isAbsent: false,
    },
    {
      id: 9,
      employeeCode: '001',
      employeeStatus: 'Present',
      employeeName: 'Muthuvel Pandiyan',
      employeePosition: 'Manager',
      employeeMobile: 9876543210,
      employeeEmail: 'muthuvel@domain.com',
      employeeAddress: 'Address 1, Address 2, City name, Pin Code - 000 000.',
      isAbsent: false,
    },
    {
      id: 10,
      employeeCode: '001',
      employeeStatus: 'Present',
      employeeName: 'Muthuvel Pandiyan',
      employeePosition: 'Manager',
      employeeMobile: 9876543210,
      employeeEmail: 'muthuvel@domain.com',
      employeeAddress: 'Address 1, Address 2, City name, Pin Code - 000 000.',
      isAbsent: false,
    },
    {
      id: 11,
      employeeCode: '001',
      employeeStatus: 'Present',
      employeeName: 'Muthuvel Pandiyan',
      employeePosition: 'Manager',
      employeeMobile: 9876543210,
      employeeEmail: 'muthuvel@domain.com',
      employeeAddress: 'Address 1, Address 2, City name, Pin Code - 000 000.',
      isAbsent: false,
    },
    {
      id: 12,
      employeeCode: '001',
      employeeStatus: 'Present',
      employeeName: 'Muthuvel Pandiyan',
      employeePosition: 'Manager',
      employeeMobile: 9876543210,
      employeeEmail: 'muthuvel@domain.com',
      employeeAddress: 'Address 1, Address 2, City name, Pin Code - 000 000.',
      isAbsent: false,
    },
    {
      id: 13,
      employeeCode: '001',
      employeeStatus: 'Present',
      employeeName: 'Muthuvel Pandiyan',
      employeePosition: 'Manager',
      employeeMobile: 9876543210,
      employeeEmail: 'muthuvel@domain.com',
      employeeAddress: 'Address 1, Address 2, City name, Pin Code - 000 000.',
      isAbsent: false,
    },
    {
      id: 14,
      employeeCode: '001',
      employeeStatus: 'Present',
      employeeName: 'Muthuvel Pandiyan',
      employeePosition: 'Manager',
      employeeMobile: 9876543210,
      employeeEmail: 'muthuvel@domain.com',
      employeeAddress: 'Address 1, Address 2, City name, Pin Code - 000 000.',
      isAbsent: false,
    },
    {
      id: 15,
      employeeCode: '001',
      employeeStatus: 'Present',
      employeeName: 'Muthuvel Pandiyan',
      employeePosition: 'Manager',
      employeeMobile: 9876543210,
      employeeEmail: 'muthuvel@domain.com',
      employeeAddress: 'Address 1, Address 2, City name, Pin Code - 000 000.',
      isAbsent: false,
    },
  ];

  isExpand = false;
  staffIndex: any = 0;
  constructor(public appService: AppService) {
    this.appService.isDefaultLayout.set(false);
  }

  indexChange(index: any) {
    this.staffIndex = index;
  }

  onExpand(event: any) {
    this.isExpand = event;
  }
}
