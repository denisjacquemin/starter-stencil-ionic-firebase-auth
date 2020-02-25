import { Component, h, State } from "@stencil/core";
import { AuthService } from "../../services/auth";
import { createToast } from "../../helpers/utils";

@Component({
    tag: "app-emailpwd-signin",
    styleUrl: "app-emailpwd-signin.css"
})

export class AppEmailpwdSignin {

    @State() authenticating: boolean = false;
    private navCtrl: HTMLIonRouterElement = document.querySelector("ion-router");

    private formData = {
        email: "",
        password: ""
    };

    componentWillLoad() {
        console.log("In AppEmailpwdSignin componentWillLoad")
        // DatabaseService.init();
    }

    componentDidLoad() {
        console.log("In AppEmailpwdSignin componentDidLoad")
        // DatabaseService.init();
      }

    handleChangeEmail(event) {
        this.formData.email = event.target.value;
    }

    handleChangePassword(event) {
        this.formData.password = event.target.value;
    }

    async signin() {
        this.authenticating = true;
        try {
            await AuthService.signinemailpwd(this.formData.email, this.formData.password);
            await AuthService.waitForAuth();
            this.authenticating = false;
            this.navCtrl.push("/signed", "forward");
        } catch (e) {
            this.authenticating = false;
            console.log("Error authenticating", e);
            await createToast(e.message);
        }
    }

    render() {
        return ([
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/" />
                    </ion-buttons>
                    <ion-title>Signin!</ion-title>
                </ion-toolbar>
            </ion-header>,
            <ion-content class="ion-padding">
                <div>
                    <ion-item>
                        <ion-label position="floating">E-mail</ion-label>
                        <ion-input
                            type="email"
                            autofocus required
                            onInput={event => {
                                this.handleChangeEmail(event);
                            }} />
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Password</ion-label>
                        <ion-input
                            type="password"
                            required
                            onInput={event => {
                                this.handleChangePassword(event);
                            }} />
                    </ion-item>
                </div>
                <ion-footer class="ion-no-border">
                    <ion-button
                        disabled={this.authenticating}
                        onClick={() => this.signin()}
                        expand="full">
                        <ion-spinner hidden={!this.authenticating}
                            name="crescent" />
                        <span hidden={this.authenticating}>SignIn</span>
                    </ion-button>
                </ion-footer>
            </ion-content>
        ])
    }
}