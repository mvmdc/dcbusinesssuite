import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a
      class="w-full h-full flex items-center justify-center text-center flex-col overflow-hidden"
    >
      <span class="block">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-menu-outline"
        >
          <path
            d="M12.837 1H4.142C2.40672 1 1 2.40672 1 4.142V12.837C1 14.5723 2.40672 15.979 4.142 15.979H12.837C14.5723 15.979 15.979 14.5723 15.979 12.837V4.142C15.979 2.40672 14.5723 1 12.837 1Z"
            stroke-width="0.5"
            stroke-miterlimit="10"
          />
          <path
            d="M29.858 1H21.163C19.4277 1 18.021 2.40672 18.021 4.142V12.837C18.021 14.5723 19.4277 15.979 21.163 15.979H29.858C31.5933 15.979 33 14.5723 33 12.837V4.142C33 2.40672 31.5933 1 29.858 1Z"
            stroke-width="0.5"
            stroke-miterlimit="10"
          />
          <path
            d="M12.837 18.021H4.142C2.40672 18.021 1 19.4277 1 21.163V29.858C1 31.5933 2.40672 33 4.142 33H12.837C14.5723 33 15.979 31.5933 15.979 29.858V21.163C15.979 19.4277 14.5723 18.021 12.837 18.021Z"
            stroke-width="0.5"
            stroke-miterlimit="10"
          />
          <path
            d="M29.858 18.021H21.163C19.4277 18.021 18.021 19.4277 18.021 21.163V29.858C18.021 31.5933 19.4277 33 21.163 33H29.858C31.5933 33 33 31.5933 33 29.858V21.163C33 19.4277 31.5933 18.021 29.858 18.021Z"
            stroke-width="0.5"
            stroke-miterlimit="10"
          />
        </svg>
      </span>
      <span
        class="text-center text-xxs font-semibold tracking-tight select-none text-black group-hover:text-primary-dc"
      >
        {{ name }}
      </span>
    </a>
  `,
  styles: ``,
})
export class MenuButtonComponent {
  @Input() public name = '';
}
