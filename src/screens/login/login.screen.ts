import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { AuthService } from "src/services/auth.service";
import { User } from '../../models/user.model';


@Component({
  selector: '<app-login>',
  templateUrl: './login.screen.html',
  styleUrls: ['./login.screen.scss']
})

export class LoginComponent {
  user: User = new User();

  constructor(
    private router: Router,
    public authSrv: AuthService,
    public _snackbar: MatSnackBar
  ) {}

  login() {
    this.authSrv.logInEmailAndPassword(this.user.email, this.user.password).then(() => {
      localStorage.setItem('permissions', '["SUDO"]' );
      this.goToPrincipal();
    }).catch((err) => {
      this.openSnackBar();
    });
  }
  newUser() {}

  openSnackBar() {
    this._snackbar.open('Usuario o Contraseña incorrectos', undefined, { duration: 1500});
  }

  goToPrincipal() {
    this.router.navigate(['/news']).then(() => {});
  }
} 