import { TestErrorComponent } from './test-error/test-error.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    NavBarComponent,
    TestErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  exports: [
    NavBarComponent,
    TestErrorComponent
  ]
})
export class CoreModule { }
