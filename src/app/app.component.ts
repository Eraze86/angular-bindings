import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgUrl: string = "https://s3.amazonaws.com/freecodecamp/relaxing-cat.jpg"
  klassCat: string = "klassCat";
  iLikeCats: boolean = false;
  
  dogImg(){
    this.imgUrl = "https://images.dog.ceo/breeds/groenendael/n02105056_1061.jpg"
  }
}
