import { Component } from '@angular/core';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-toast';

  constructor(private toastService: ToastService) {
  }

  showSuccessToast() {
    const param = {
      msg: 'success',
      position: this.toastService.position.top_right,
      timeout: 1000
    };
    this.toastService.showSuccessToast(param);
  }

  showInfoToast() {
    const param = {
      msg: 'info',
      position: this.toastService.position.top_center,
      timeout: 2000
    };
    this.toastService.showInfoToast(param);
  }

  showWarningToast() {
    const param = {
      msg: 'warning',
      position: this.toastService.position.bottom_left,
      timeout: 3000
    };
    this.toastService.showWarningToast(param);
  }

  showErrorToast() {
    const param = {
      msg: 'error',
      position: this.toastService.position.bottom_center,
      timeout: 4000
    };
    this.toastService.showErrorToast(param);
  }
}
