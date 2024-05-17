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

  items: any[] = [];
  product = { name: '', quantity: '', category: '' };

  ngOnInit() {
    // Cargar los datos del localStorage al iniciar la página
    const savedItems = localStorage.getItem('items');
    if (savedItems) {
      this.items = JSON.parse(savedItems);
    }
  }

  cancel() {
    this.product = { name: '', quantity: '', category: '' };
    this.modal.dismiss(null, 'cancel');
  }

  async addProducts() {
    if (this.product.name && this.product.quantity && this.product.category) {
      this.items.push({ ...this.product });
      this.items.sort((a, b) => a.category.localeCompare(b.category)); //Ordenar categoria por letra
      this.items.sort((a, b) => a.name.localeCompare(b.name));  //Ordenar nombre por letra
      localStorage.setItem('items', JSON.stringify(this.items)); // Guardar los datos en localStorage
      const toast = await this.toastController.create({
        message: 'Producto agregado correctamente',
        duration: 1500,
        cssClass: 'toastProducto',
        swipeGesture: 'vertical',
        color: 'success',
        animated: true,
        mode: 'ios',
        position: 'bottom'
      });
      toast.present();
      this.product = { name: '', quantity: '', category: '' };
      this.modalController.dismiss();
    } else {
      const toast = await this.toastController.create({
        message: 'Por favor, rellene todos los campos',
        duration: 1500,
        color: 'danger',
        position: 'bottom',
        mode: 'ios',
        swipeGesture: 'vertical',
        animated: true
      });
      toast.present();
    }
  }

  getCategorizedItems() {
    const categorizedItems: { [key: string]: any[] } = {};
    for (const item of this.items) {
      if (!categorizedItems[item.category]) {
        categorizedItems[item.category] = [];
      }
      categorizedItems[item.category].push(item);
    }
    return categorizedItems;
  }

  checkboxChanged(item: any) {
    // función que maneja el cambio de checkbox
    item.checked = !item.checked;
    console.log('Checkbox changed:', item);
  }
}

