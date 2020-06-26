import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/allServices/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastController, AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/allServices/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = this.api.getCurrentUser();
  userForm: FormGroup;
  


  mainlogo: string = "assets/images/avatto-web-white.png";
  constructor(private fb: FormBuilder,private router:Router, private api: ApiService, private toastCtrl: ToastController, private alertCtrl: AlertController) {
    this.user.subscribe(user => {
      if (user) {
        console.log('already logged in');
      } else {
        
      }
    });
   }

  ngOnInit() {

    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: ['', Validators.required]
    });
   
  }


  login() {
    this.api.signIn(this.userForm.value.username, this.userForm.value.password).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/home']);
      },
      err => {
        this.showError(err);
      }
    );
  }

  async openPwReset() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot password?',
      message: 'Enter your email or username to retrieve a new password',
      inputs: [
        {
          type: 'text',
          name: 'usernameOrEmail'
        }
      ],
      buttons: [
        {
          role: 'cancel',
          text: 'Back'
        },
        {
          text: 'Reset Password',
          handler: (data) => {
            this.resetPw(data['usernameOrEmail']);
          }
        }
      ]
    });
  
    await alert.present();
  }

  resetPw(usernameOrEmail) {
    this.api.resetPassword(usernameOrEmail).subscribe(
      async res => {
        const toast = await this.toastCtrl.create({
          message: res['message'],
          duration: 2000
        });
        toast.present();
      },
      err => {
        this.showError(err);
      }
    );
  }

  
 
  logout() {
    this.api.logout();
  }
  async showError(err) {
    const alert = await this.alertCtrl.create({
      header: err.error.code,
      subHeader: err.error.data.status,
      message: err.error.message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
