import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../assets/css/main.less','../assets/css/categorie.less','../assets/css/header.less']
})
export class AppComponent {
  title = 'app';

  selectedCategorie = -1;
  selectedItem = -1;

  selectItem( categorie, item ){
  	this.selectedCategorie = categorie;
  	this.selectedItem = item;

    //console.log(categorie+''+item);
  };

  isSelected( categorie, item ){
  	return this.selectedCategorie == categorie && this.selectedItem == item;
  };

  isSelectedCategorie( categorie ){
    return this.selectedCategorie == categorie;
  };
}