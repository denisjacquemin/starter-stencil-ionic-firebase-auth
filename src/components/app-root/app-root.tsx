import { Component, h } from '@stencil/core';
import { AuthService } from "../../services/auth";


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  componentWillLoad() {
    AuthService.init();
  }
  
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-welcome" />
          <ion-route url="/signin-emailpwd" component="app-emailpwd-signin" />
          <ion-route url="/signup-emailpwd" component="app-emailpwd-signup" />
          <ion-route url="/signed" component="app-signed" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
