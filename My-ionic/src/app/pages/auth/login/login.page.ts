import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from 'src/app/services/auth.service';
import { AuthService } from '../../../services/auth.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AuthService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

onLogin(data) {
    this.auth.loginUser(data)
    .subscribe(
      async res => {
        if (res) {
          let jwt = (res.token);
          // tslint:disable-next-line: align
          this.auth.saveToken(jwt);
          // une fois que je suis authentifier je suis dan home
        this.router.navigate(['/login']);
        } else {
          const alert = await this.alertCtrl.create({
            header: 'Login Failed',
            message: 'Wrong credentials.',
            buttons: ['Ok']
          });
          await alert.present();
        }
     
      });
  }

  isAdmin() {
    return this.auth.isAdmin();
  }

  isCaissier() {
    return this.auth.isCaissier();
  }

  isPartenaire() {  
    return this.auth.isPartenaire();
  }

  isUser() {
    return this.auth.isUser();
  }

}
