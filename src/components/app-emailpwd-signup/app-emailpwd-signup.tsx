import { Component, h, State } from "@stencil/core";
import { AuthService } from "../../services/auth";
import { createToast } from "../../helpers/utils";

@Component({
    tag: "app-emailpwd-signup",
    styleUrl: "app-emailpwd-signup.css"
})

export class AppEmailpwdSignup {

    @State() authenticating: boolean = false;
    private navCtrl: HTMLIonRouterElement = document.querySelector("ion-router");

    private formData = {
        email: "",
        password: ""
    };

    handleChangeEmail(event) {
        this.formData.email = event.target.value;
    }

    handleChangePassword(event) {
        this.formData.password = event.target.value;
    }

    async signup() {
        this.authenticating = true;
        try {
            await AuthService.signupemailpwd(this.formData.email, this.formData.password);
            await AuthService.waitForAuth();
            this.authenticating = false;
            this.navCtrl.push("/signed", "forward");
        } catch (e) {
            this.authenticating = false;
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
                    <ion-title>Signup!</ion-title>
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
                                this.handleChangeEmail(event);}} /> 
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Password</ion-label>
                        <ion-input 
                            type="password" 
                            required 
                            onInput={event => {
                                this.handleChangePassword(event);}} /> 
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Password confirmation</ion-label>
                        <ion-input type="password" required /> </ion-item>

                </div>
                <ion-footer class="ion-no-border">
                    <ion-button
                        disabled={this.authenticating} 
                        onClick={() => this.signup()}
                        expand="full">
                        <ion-spinner hidden={!this.authenticating}
                            name="crescent" />
                        <span hidden={this.authenticating}>SignUp</span> 
                    </ion-button>
                </ion-footer>
            </ion-content>
        ])
    }
}