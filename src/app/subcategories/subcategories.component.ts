import { Component, OnInit, Input } from '@angular/core';

export interface Category {
  id: number;
  name: string;
  subcategories: string[];
}

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.scss']
})
export class SubcategoriesComponent implements OnInit {
  // @ts-ignore
  @Input() id: number;

  constructor() { }

  //todo check what is "Cesje"

  categories: Category[] = [
    { id: 0, name: 'Elektronika', subcategories: ["Audio i hi-fi", "Cesje", "Fotografia i wideo", "Gry wideo i konsole", "Komputery i software", "Radiokomunikacja", "Tablety i czytniki książek", "Telefony i akcesoria", "Telewizory i odtwarzacze", "Elektronika inne", "Kupię sprzęt elektroniczny"] },
    { id: 1, name: 'Antyki i kolekcje', subcategories: ["Karty kolekcjonerskie", "Książki i poligrafia", "Lampy, świeczniki i lustra", "Meble zabytkowe", "Medale i odznaczenia", "Monety i banknoty", "Obrazy i rzeźby", "Rękodzieło", "Zastawy kuchenne", "Zabytkowe tekstylia i dekoracje", "Zegary", "Znaczki pocztowe", "Inne kolekcje", "Kupię antyki, kolekcje"] },
    { id: 2, name: 'Dla dziecka', subcategories: ["Artykuły szkolne", "Bezpieczeństro i zdrowie dziecka", "Buty dla dzieci", "Chrzciny i komunie", "Ciąża i karmienie", "Foteliki - nosidełka", "Kąpiel i zdrowie", "Kojce i chodziki", "Meble i wystrój pokoju", "Rowerki i inne pojazdy", "Odzież dziecięca", "Wózki dla dzieci", "Zabawki", "Inne dla dziecka", "Kupię ubranka, buty dla dziecka", "Kupię zabawki", "Kupię inne dla dziecka"] },
    { id: 3, name: 'Nieruchomości', subcategories: ["Pokoje do wynajęcia", "Mieszkania i domy do wynajęcia", "Mieszkania i domy - sprzedam", "Działki", "Krótki termin i domki letniskowe", "Lokal i biuro", "Parking i garaż", "Kupię mieszkanie, dom, lokal, działkę", "Szukam mieszkania, lokalu do wynajęcia", "Szukam pokoju do wynajęcia"] },
    { id: 4, name: 'Dom i ogród', subcategories: ["AGD", "Meble", "Narzędzia i materiały budowlane", "Ogród", "Produkty żywnościowe i napoje", "Wyposażenie wnętrz", "Inne do domu i ogrodu", "Kupię do ogrodu", "Kupię do domu"] },
    { id: 5, name: 'Usługi', subcategories: ["Biura podróży", "Współpraca biznesowa", "Catering", "Usługi finansowe", "Fotografia i wideo", "Graficy i usługi IT", "Hurt i handel", "Komputery serwis i handel", "Usługi kurierskie", "Nauka i edukacja", "Mechanika, autoskup, pomoc drogowa", "Media i reklama", "Muzycy i artyści", "Ogrodnictwo", "Opieka i agencje niań", "Pielęgnacja i uroda", "Usługi prawne", "Przeprowadzki i transport towarów", "Przyjęcia, śluby, komunie", "Remont i budowa", "Serwis i montaż", "Sport i fitness", "Sprzątanie", "Taxi i przewozy osobowe", "Telefony", "Tłumaczenia i redakcja tekstu", "Utylizacja", "Wypożyczalnie", "Zdrowie", "Inne usługi", "Szukam usług finansowych", "Szukam usług budowlanych", "Szukam innych usług", "Szukam kursu, lekcji, korepetycji"] },
    { id: 6, name: 'Muzyka i rozrywka', subcategories: ["Bilety", "Instrumenty i akcesoria muzyczne", "Komiksy i czasopisma", "Książki", "CD, kasety i płyty", "Filmy i DVD", "Gry planszowe i puzzle", "Kupię instrument muzyczny", "Kupię bilet", "Kupię inne z działu muzyka i rozrywka"] },
    { id: 7, name: 'Łodzie i pojazdy wodne', subcategories: ["Motorówki", "Skutery wodne", "Żaglówki", "Kajaki i pontony", "Silniki do łodzi", "Akcesoria do łodzi", "Inne pojazdy wodne", "Łodzie wiosłowe", "Kupię łódź, części, akcesoria"] },
    { id: 8, name: 'Szukający zatrudnienia', subcategories: [] },
    { id: 9, name: 'Motoryzacja', subcategories: ["Samochody osobowe", "Części i akcesoria samochodowe", "Samochody dostawcze", "Motocykle i skutery", "Części i akcesoria do motocykli", "Ciągniki i maszyny rolnicze", "Ciężki sprzęt", "Przyczepy i naczepy", "Quady, ATV i inne", "Części i akcesoria do innych pojazdów", "Kupię samochód", "Kupię motocykl, skuter, pojazd", "Kupię części, akcesoria samochodowe", "Kupię części akcesoria do innych pojazdów"] },
    { id: 10, name: 'Społeczność', subcategories: ["Drobne pytania i hobby", "Sport, taniec i partnerzy do gry", "Zespoły i muzycy", "Wolontariat", "Wydarzenia lokalne", "Wymiana umiejętności", "Zgubiono lub znaleziono", "Przejazdy", "Podróże", "Dziękuję", "Wyznania", "Szukam starych przyjaciół"] },
    { id: 11, name: 'Sport i fitness', subcategories: ["Fitness i siłownia", "Sport", "Karty i gadżety sportowe", "Sprzęt turystyczny", "Kupię sprzęt fitness, do siłowni", "Kupię sprzęt sportowy"] },
    { id: 12, name: 'Zdrowie i uroda', subcategories: ["Zdrowie", "Kosmetyki", "Perfumy i dezodoranty", "Kupię produkty zdrowotne, kosmetyki"] },
    { id: 13, name: 'Zwierzaki', subcategories: ["Akwarystyka", "Koty i kocięta", "Psy i szczenięta", "Ptaki", "Inne zwierzaki", "Zwierzęta gospodarskie", "Zagubiono lub znalecziono", "Akcesoria dla zwierząt", "Usługi dla zwierząt", "Kupię zwierzaka", "Szukam akcesoriów, usług dla zwierząt"] },
    { id: 14, name: 'Moda', subcategories: ["Akcesoria i galanteria", "Biżuteria i zegarki", "Obuwie damskie", "Obuwie męskie", "Odzież damska", "Odzież męska", "Odzież i obuwie robocze", "Pasmanteria", "Torebki i torby", "Inne ubrania", "Walizki i plecaki", "Kupię ubrania, buty", "Kupię inne z działu mody"] },
    { id: 15, name: 'Oferty pracy', subcategories: ["Bar, restauracja i gastronomia", "Biuro i administracja", "Praca na budowie i pracownicy fizyczni", "Fachowcy", "Finanse i księgowość", "Grafika i web design", "Hostessy, modele i aktorzy", "HR, kadry i rekrutacja", "Inżynierowie, technicy i architekci", "Kierowcy i kurierzy", "Kontrola i inwentaryzacja", "Krawiectwo i moda", "Magazynier", "Marketing, media i PR", "MLM", "Nauczyciele i edukacja", "Obsługa klienta i call center", "Ochrona", "Opiekunki i nianie", "Pielęgnacja i uroda", "Praca dla studentów", "Praca na produkcji", "Praca w hotelu", "Prawo i prokuratura", "Programiści, informatyka i internet", "Służba zdrowia i farmacja", "Spedycja", "Sport i fitness", "Sprzątanie i pomoc domowa", "Sprzedaż, handel i praca w sklepie", "Turystyka", "Ulotki", "Weterynaria i rolnictwo", "Wideo i fotografia", "Praca inne"] },
    { id: 16, name: 'Wymiana/zamiana', subcategories: [] },
    { id: 17, name: 'Oddam za darmo', subcategories: [] }
  ];

  ngOnInit(): void {
  }

}
