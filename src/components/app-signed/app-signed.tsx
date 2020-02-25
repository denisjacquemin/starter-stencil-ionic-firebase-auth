import { Component, State, h } from "@stencil/core";
import { AuthService } from "../../services/auth";
import { createLoadingOverlay } from "../../helpers/utils";

@Component({
    tag: "app-signed",
    styleUrl: "app-signed.css"
})

export class AppSigned {

    @State() isSignedIn: boolean = false;

    private navCtrl: HTMLIonRouterElement = document.querySelector("ion-router");

    async componentDidLoad() {

        let loading = await createLoadingOverlay();
        loading.present();
        let user = await AuthService.getCurrentAuth();
        if (user) {
            this.isSignedIn = true;
            loading.dismiss();
        } else {
            loading.dismiss();
            this.isSignedIn = false;
            this.navCtrl.push("/");
        }
    }

    async logOut() {
        await AuthService.logOut();
        this.navCtrl.push("/", "back");
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>Signed!</ion-title>
                    <ion-buttons slot="end">
                        <ion-button onClick={() => this.logOut()}>
                            <ion-icon slot="icon-only" name="log-out" />
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>,

            <ion-content class="ion-padding" hidden={!this.isSignedIn}>
                <p>
                    Congrats your are signed
                </p>
            </ion-content>
        ];
    }
}