import { Component, OnInit } from '@angular/core';

export interface Tile {
  id: number,
  color: string;
  cols: number;
  rows: number;
  text: string;
  image: string;
  showSubcategories: boolean;
}

export interface text {
  text: string
}

@Component({
  selector: 'app-category-grid',
  templateUrl: './category-grid.component.html',
  styleUrls: ['./category-grid.component.scss']
})

export class CategoryGridComponent implements OnInit {
  // @ts-ignore
  id: number;

  constructor() {
  }

  tiles: Tile[] = [
    { id: 0, text: 'Elektronika', cols: 1, rows: 1, color: 'white', image: 'assets/img/categoryImages/0ed8105e-ce3a-4989-9217-8a03ba66eb35.png', showSubcategories: false },
    { id: 1, text: 'Antyki i kolekcje', cols: 1, rows: 1, color: 'white', image: 'assets/img/categoryImages/1cbebfec-ef66-446d-97dd-0be3327ce539.png', showSubcategories: false },
    { id: 2, text: 'Dla dziecka', cols: 1, rows: 1, color: 'white', image: 'assets/img/categoryImages/1ef34e45-6db0-4cbb-b50b-ccc4234a0c03.png', showSubcategories: false },
    { id: 3, text: 'Nieruchomości', cols: 1, rows: 1, color: 'white', image: 'assets/img/categoryImages/1f8d1b9d-933f-4852-8aa1-822123c79567.png', showSubcategories: false },
    { id: 4, text: 'Dom i ogród', cols: 1, rows: 1, color: 'white', image: 'assets/img/categoryImages/2eb3a03d-e7c7-4675-811a-05d3870b8171.png', showSubcategories: false },
    { id: 5, text: 'Usługi', cols: 1, rows: 1, color: 'white', image: 'assets/img/categoryImages/3b45650f-bff2-4c64-9197-36ce46d00e0d.png', showSubcategories: false },
    { id: 6, text: 'Muzyka i rozrywka', cols: 1, rows: 1, color: 'white', image: 'assets/img/categoryImages/3dbc8ea9-4903-4f44-93c5-db0d0069e1fc.png', showSubcategories: false },
    { id: 7, text: 'Łodzie i pojazdy wodne', cols: 1, rows: 1, color: 'white', image: 'assets/img/categoryImages/3e634cb9-c147-4d68-b51a-2b9c4c0450af.png', showSubcategories: false },
    { id: 8, text: 'Szukający zatrudnienia', cols: 1, rows: 1, color: 'white', image: 'assets/img/categoryImages/7bd8abc8-bb28-4f7b-9dbd-88f1de106150.png', showSubcategories: false },
    { id: 9, text: 'Motoryzacja', cols: 1, rows: 1, color: 'white', image: 'assets/img/categoryImages/8d348446-2848-40cd-9045-11a361f8841c.png', showSubcategories: false },
    { id: 10, text: 'Społeczność', cols: 1, rows: 1, color: 'white', image: 'assets/img/categoryImages/9d69ba65-9263-4c73-a98e-51b1c06e72f0.png', showSubcategories: false },
    { id: 11, text: 'Sport i fitness', cols: 1, rows: 1, color: 'white', image: 'assets/img/categoryImages/9efba6d2-aba7-4a77-bef8-d9d23cf5d62c.png', showSubcategories: false },
    { id: 12, text: 'Zdrowie i uroda', cols: 1, rows: 1, color: 'white', image: 'assets/img/categoryImages/45a50320-8847-4110-842c-d2a85fadbcb4.png', showSubcategories: false },
    { id: 13, text: 'Zwierzaki', cols: 1, rows: 1, color: 'white', image: 'assets/img/categoryImages/zwierzaki.png', showSubcategories: false },
    { id: 14, text: 'Moda', cols: 1, rows: 1, color: 'white', image: 'assets/img/categoryImages/moda.png', showSubcategories: false },
    { id: 15, text: 'Oferty pracy', cols: 1, rows: 1, color: 'white', image: 'assets/img/categoryImages/oferty_pracy.png', showSubcategories: false },
    { id: 16, text: 'Wymiana/zamiana', cols: 1, rows: 1, color: 'white', image: 'assets/img/categoryImages/empty.png', showSubcategories: false },
    { id: 17, text: 'Oddam za darmo', cols: 1, rows: 1, color: 'white', image: 'assets/img/categoryImages/empty.png', showSubcategories: false }
  ];

  ngOnInit(): void {
  }

  toggleShowSubcategories(id: number) {
    this.tiles[id].showSubcategories=!this.tiles[id].showSubcategories;

    this.tiles.forEach(element => {
      if(element.id != id)
        element.showSubcategories = false;
    });
  }

}
