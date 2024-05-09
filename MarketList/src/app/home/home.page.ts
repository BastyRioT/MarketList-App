import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ModalController, NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController, private navController: NavController,
    private toastController: ToastController) { }

  @ViewChild(IonModal) modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = '';

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  async agregarProducto() {
    // Logica para que se agreguen los productos
    // Mostrar el toast
    const toast = await this.toastController.create({
      message: 'Producto agregado correctamente',
      duration: 1500, // Duración del toast en milisegundos
      cssClass: 'toastProducto', // Nombre de la clase
      swipeGesture: 'vertical', // Deslizar hacia abajo para sacarlo
      color: 'success', // Color del toast
      animated: true, // Animacion
      mode: 'ios', // ios o md el estilo del toast
      position: 'bottom' // Posicion del Toast
    });
    toast.present();

    this.modalController.dismiss();
  }
}
