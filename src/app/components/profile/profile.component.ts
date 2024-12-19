import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any = {};

  constructor(private AuthServiceService: AuthServiceService) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  // جلب البيانات من Local Storage أو API
  loadUserData() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      console.error('No user data found');
    }
  }
}
