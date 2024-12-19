import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
deleteUser(arg0: any) {
throw new Error('Method not implemented.');
}
editUser(arg0: any) {
throw new Error('Method not implemented.');
}
addUser() {
throw new Error('Method not implemented.');
}
  searchTerm: string = '';
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    // this.userService.getUsers().subscribe({
    //   next: (data: any[]) => (this.users = data),
    //   error: (err: any) => console.error('Error loading users', err),
    // });
  }


  // searchTerm: string | undefined;




  fetchUsers(): void {
    // this.userService.getUser().subscribe(
    //   (data) => {
    //     this.users = data;
    //   },
    //   (error) => {
    //     console.error('Error fetching users:', error);
    //   },
    // );
  }
}
