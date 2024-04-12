import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalProductosPage } from './modal-productos.page';

describe('ModalProductosPage', () => {
  let component: ModalProductosPage;
  let fixture: ComponentFixture<ModalProductosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
