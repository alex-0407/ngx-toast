import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

interface IParams {
  msg: string; // 提示文本
  title?: string; // 标题
  position?: string; // 显示位置
  timeout?: number; // 延迟时间
}

@Injectable()
export class ToastService {
  public toastrConfig = {};
  public position = {
    top_right: 'toast-top-right',
    bottom_right: 'toast-bottom-right',
    top_left: 'toast-top-left',
    bottom_left: 'toast-bottom-left',
    top_full: 'toast-top-full',
    bottom_full: 'toast-bottom-full',
    top_center: 'toast-top-center',
    bottom_center: 'toast-bottom-center'
  };

  constructor(private toastrService: ToastrService) { }

  public showInfoToast(params: IParams) {
    const timeOut: number = params.timeout ? params.timeout : 1000;
    const position = params.position;
    this.toastrConfig = {
      timeOut:  timeOut,
      positionClass: position
    };
    this.toastrService.info(params.msg, params.title, this.toastrConfig);
  }

  public showSuccessToast(params: IParams) {
    const timeOut: number = params.timeout ? params.timeout : 1000;
    const position = params.position;
    this.toastrConfig = {
      timeOut:  timeOut,
      positionClass: position
    };
    this.toastrService.success(params.msg, params.title, this.toastrConfig);
  }

  public showWarningToast(params: IParams) {
    const timeOut: number = params.timeout ? params.timeout : 1000;
    const position = params.position;
    this.toastrConfig = {
      timeOut:  timeOut,
      positionClass: position
    };
    this.toastrService.warning(params.msg, params.title, this.toastrConfig);
  }

  public showErrorToast(params: IParams) {
    const timeOut: number = params.timeout ? params.timeout : 1000;
    const position = params.position;
    this.toastrConfig = {
      timeOut:  timeOut,
      positionClass: position
    };
    this.toastrService.error(params.msg, params.title, this.toastrConfig);
  }
}
