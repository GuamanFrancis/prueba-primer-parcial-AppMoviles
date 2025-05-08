import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formData = {
    nombre: '',
    apellido: '',
    correo:'',
    sexo:'',
    etnia:'',
    edad:'',
    direccion:'',
    cedula:'',
    Date:'',
    estado:'',


  };

  constructor(private firestore: Firestore) {}

  guardarDatos() {
    const colRef = collection(this.firestore, 'formularios');
    addDoc(colRef, this.formData).then(() => {
      console.log('Datos guardados en Firestore');
      console.log(this.formData.Date);
      
    });
  }
}
