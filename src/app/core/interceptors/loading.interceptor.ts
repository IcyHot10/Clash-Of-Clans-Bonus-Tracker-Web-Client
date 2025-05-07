import { HttpInterceptorFn } from '@angular/common/http';
import { BusyService } from '../busy.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const busyService = inject(BusyService);
  busyService.loading()
  return next(req).pipe(
    finalize(()=>busyService.idle())
  );
};
