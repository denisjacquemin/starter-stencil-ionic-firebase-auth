import firebase from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import "firebase/auth";

class AuthController {

    public user: firebase.User;
    public detachListener: Function;

    init() {
        firebase.initializeApp(firebaseConfig);
    }

    async waitForAuth(): Promise<firebase.User> {
        return new Promise(resolve => {
            this.detachListener =
                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        this.user = user;
                        this.detachListener();
                        resolve(user);
                    }
                });
        });
    }

    async getCurrentAuth(): Promise<firebase.User> {
        return new Promise(resolve => {
            this.detachListener =
                firebase.auth().onAuthStateChanged(user => {
                    this.user = user;
                    this.detachListener();
                    resolve(user);
                });
        });
    }

    async signinemailpwd(email: string, password: string):
        Promise<firebase.auth.UserCredential> {
        return new Promise((resolve, reject) => {
            try {
                const userCredential = 
                    firebase.auth().signInWithEmailAndPassword(email, password);
                resolve(userCredential);
            } catch (error) {
                reject(error);
            }
        });
    }

    async signupemailpwd(email: string, password: string):
        Promise<firebase.auth.UserCredential> {
        return new Promise((resolve, reject) => {
            try {
                const userCredential = 
                    firebase.auth().createUserWithEmailAndPassword(email, password);
                resolve(userCredential);
            } catch (error) {
                reject(error);
            }
        });
    }


    async loginAnon(displayName?: string):
        Promise<firebase.auth.UserCredential> {
        try {
            const userCredential = await
                firebase.auth().signInAnonymously();

            if (displayName) {
                await userCredential.user.updateProfile({
                    displayName: displayName
                });
            }
            return userCredential;
        } catch (error) {
            console.log(error);
        }
    }
    async logOut(): Promise<void> {
        return await firebase.auth().signOut();
    }
}

export const AuthService = new AuthController();