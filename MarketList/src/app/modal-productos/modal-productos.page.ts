import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-productos',
  templateUrl: './modal-productos.page.html',
  styleUrls: ['./modal-productos.page.scss'],
})

export class ModalProductosPage implements OnInit {

  nuevoProducto: string = '';

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  cerrarModal() {
    this.modalController.dismiss();
  }

  agregarProducto() {
    // Aquí puedes implementar la lógica para agregar el producto
    // Por ejemplo, puedes emitir un evento o llamar a una función pasada como prop
    if (this.nuevoProducto) {
      this.modalController.dismiss(this.nuevoProducto);
    }
  }
}