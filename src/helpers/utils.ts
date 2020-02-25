import { toastController } from "@ionic/core";
import { loadingController } from "@ionic/core";


export function sayHello() {
  return Math.random() < 0.5 ? 'Hello' : 'Hola';
}

export async function createToast(message) {
  let toast =  await toastController.create({
      color: 'dark',
      duration: 4000,
      message: message
  });
  toast.present();
}

export async function createLoadingOverlay() {
  return await loadingController.create({
      message: "Authenticating...",
      spinner: "crescent"
  });
}