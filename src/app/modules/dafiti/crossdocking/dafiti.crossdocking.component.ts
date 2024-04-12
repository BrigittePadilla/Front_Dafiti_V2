import { Component } from '@angular/core';

@Component({
  selector: 'crossdocking',
  templateUrl: './dafiti.crossdocking.component.html',
  styleUrls: ['./dafiti.crossdocking.component.scss']
})
export class DafitiCrossdockingComponent {

    archivoSeleccionado: File | undefined;

  arregloArchivos:File[]=[];

  constructor() {  }

  ngOnInit() {}

  //Archivo seleccionado
  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.archivoSeleccionado = inputElement.files ? inputElement.files[0] : null;

    if (!this.archivoSeleccionado) {
        console.error('No se ha seleccionado ningún archivo');
    }else{
        this.arregloArchivos.push(this.archivoSeleccionado)
        console.log('Detalles del archivo');
        console.log('Nombre del archivo', this.archivoSeleccionado.name);
        console.log('Tamaño del archivo:', (this.archivoSeleccionado.size / 1024).toFixed(2), 'KB');
        console.log('Arreglo: '+this.arregloArchivos);
        console.log('Tamaño del arreglo: '+this.arregloArchivos.length);
    }
  }

  //Envío del archivo
  onSubmit() {
    console.log('voy a enviar el archivo');

    /*if (this.archivoSeleccionado !== null) {
      this.actualizarService.uploadFile(this.archivoSeleccionado).subscribe(
        (respuesta) => {
          console.log('Archivo subido exitosamente', respuesta);
        },
        (error) => {
          console.error('Error al subir el archivo', error);
        }
      );
    } else {
      console.warn('No se ha seleccionado ningún archivo.');
    }*/
  }

}
