import { Component, inject } from '@angular/core';
import { RouterLink , RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

 readonly _AuthServiceService=inject(AuthServiceService)

// log():void{
//   this._AuthServiceService.logout()
// }

}
