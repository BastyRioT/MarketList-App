import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal-productos',
  templateUrl: './modal-productos.page.html',
  styleUrls: ['./modal-productos.page.scss'],
})

export class ModalProductosPage implements OnInit {

  nuevoProducto: string = '';

  constructor(private modalController: ModalController, private navController: NavController,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  cerrarModal() {
    this.modalController.dismiss();
  }

  async agregarProducto() {
    // Mostrar el toast
    const toast = await this.toastController.create({
      message: 'Producto agregado correctamente',
      duration: 1500, // Duración del toast en milisegundos
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
