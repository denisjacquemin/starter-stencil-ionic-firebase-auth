import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/signin-emailpwd" component="auth/app-emailpwd-signin" />
          <ion-route url="/signup-emailpwd" component="auth/app-emailpwd-signup" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
