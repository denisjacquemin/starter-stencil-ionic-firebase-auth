import { Component, State, h } from '@stencil/core';
import { AuthService } from "../../services/auth";
import { createLoadingOverlay } from "../../helpers/utils";

@Component({
  tag: 'app-welcome',
  styleUrl: 'app-welcome.css'
})
export class AppWelcome {

  @State() isSignedIn: boolean = false;

  private navCtrl: HTMLIonRouterElement = document.querySelector("ion-router");

  async componentDidLoad() {

    let loading = await createLoadingOverlay();
    loading.present();
    let user = await AuthService.getCurrentAuth();
    if (user) {
        this.isSignedIn = true;
        loading.dismiss();
        this.navCtrl.push("/signed");
    } else {
        loading.dismiss();
        this.isSignedIn = false;
    }
}

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Welcome</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding" hidden={this.isSignedIn}>

        <ion-button href="/signin-emailpwd" expand="block">Email Signin</ion-button>
        <ion-button href="/signup-emailpwd" expand="block">Email Signup</ion-button>
      </ion-content>
    ];
  }
}
