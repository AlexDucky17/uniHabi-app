import { Component } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
  info : string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  folders : Section[] = [
    {
      name: 'Enrique Alexander',
      updated: new Date('1/1/16'),
      info: "Se hacen inyecciones a domicilio. Puede ponerse en contacto al +52837448899",
    },
    {
      name: 'Felipe Olivares',
      updated: new Date('1/17/16'),
      info: "Se venden paletas de hielo (Edificio 8, Departamento 802)",
    },
    {
      name: 'Gisela Olivares',
      updated: new Date('1/28/16'),
      info: "Se hacen curaciones a domicilio(Edificio 11, Departamento 801)",
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
      info: "Se hacen inyecciones a domicilio. Puede ponerse en contacto al +52837448899",
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
      info: "Se hacen inyecciones a domicilio. Puede ponerse en contacto al +52837448899",
    },
  ];

}
