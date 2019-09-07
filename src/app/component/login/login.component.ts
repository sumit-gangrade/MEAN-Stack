import { Component, OnInit } from '@angular/core';
import { SocialUser, AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: any = SocialUser;

  constructor(private socialAuthService: AuthService, private userService: LoginService, private route: Router) {
  }

  ngOnInit() {
  }

  googlelogin() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
      console.log('User Data: ', userData);
      if (userData) {
        this.user = userData;
        const userObject = {
          userId: this.user.id,
          name: this.user.name,
          email: this.user.email,
          image: this.user.image
        };
        this.userService.saveUser(userObject).subscribe((saveDetails: any) => {
          console.log('After Saving: ', saveDetails);
          if (saveDetails) {
            this.route.navigate(['/dashboard', saveDetails._id]);
          }
        });
      }
    });
  }

  // Method to log out.
  signOut(): void {
    this.socialAuthService.signOut();
    this.user = null;
    console.log('User signed out.');
  }

}
