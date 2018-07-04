import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

@ViewChild('username')usr;
@ViewChild('password') pwd;

constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

signup(){
  this.fire.auth.createUserWithEmailAndPassword(this.usr.value,this.pwd.value).then(data => {
    console.log('got data', data);
  })
  .catch(error =>{
    console.log('got an error',error);
  })
  console.log(this.usr.value,this.pwd.value);
}


}
