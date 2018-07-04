import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username')usr;
  @ViewChild('password') pwd;
  constructor(private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public alrtCtrl:AlertController) {
  }

  alert(message: string){
    this.alrtCtrl.create({
      title: 'Information',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    this.fire.auth.signInWithEmailAndPassword(this.usr.value,this.pwd.value)
    .then(data=>{
      console.log('Here is the data',data);
    })
    .catch(error=>{
      console.log('Error: ',error);
    })
  }
}
