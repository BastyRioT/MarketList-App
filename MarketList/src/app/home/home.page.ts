import { Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalProductosPage } from '../modal-productos/modal-productos.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) { }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: ModalProductosPage, // Asegúrate de especificar el componente de tu modal
      // Puedes pasar datos adicionales al modal usando 'componentProps'
      componentProps: {
        // Por ejemplo, puedes pasar una función para manejar los productos añadidos
        onProductAdded: (product: string) => {
          // Aquí puedes manejar la lógica para añadir el producto a tu lista
          console.log('Producto añadido:', product);
        }
      }
    });
    await modal.present();
  }
}
