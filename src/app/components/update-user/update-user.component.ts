import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent {
  userForm: FormGroup;
  userId: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
    this.userId = +this.route.snapshot.paramMap.get('id')!;
  }

  nngOnInit(): void {
    // Get 'id' from route parameters
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id')!; // Convert to number
      if (id) {
        this.userId = id;
        this.loadUserData(id);
      } else {
        console.error('User ID is missing in the route.');
      }
    });
  }

  // Load user data
  loadUserData(id: number): void {
    this.userService.getUsers(id).subscribe({
      next: (user) => {
        this.userForm.patchValue(user); // Prefill the form with user data
      },
      error: (err) => {
        console.error('Error fetching user data:', err);
      },
    });
  }

  // Submit updated form
  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.updateUser(this.userId, this.userForm.value).subscribe({
        next: () => alert('User updated successfully!'),
        error: (err) => console.error('Update error:', err),
      });
    }
  }
}
