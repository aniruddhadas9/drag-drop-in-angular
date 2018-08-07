import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simple Drag and Drop';
  public modalRef;
  public coordinates;
  public location;

  // header links
  public middleButton;
  public headerBrand;
  public headerLeftLinks;

  // footer links
  public year: string;
  public social;
  public brand;
  public contact;
  public message;
  public columnOneLinks;
  public columnTwoLinks;

  constructor() {

    this.middleButton = {
      display: false,
      label: 'Trying to get location from device...',
      loading: true
    };

    this.headerLeftLinks = [
      {label: 'Pofile', url: '/profile', display: true},
    ];
    this.headerBrand = {
      label: 'Keysight Technologies: Drag & Drop',
      url: '/'
    };

    this.year = '2018';
    this.social = {
      facebook: 'http://www.facebook.com/aniruddhadas9',
      googlePlus: 'http://www.plus.google.com/aniruddhadas9',
      twitter: 'http://www.twitter.com/aniruddhadas9',
      linkedin: 'https://www.linkedin.com/in/aniruddhadas9/',
    };

    this.brand = {
      label: 'Aniruddha Das',
      url: 'https://aniruddhadas9.github.io'
    };

    this.contact = {
      name: 'Aniruddha Das',
      email: 'aniruddhadas9@gmail.com',
      phone: '+1 415 650 9102',
      fax: '+x xxx xxx xxxx'
    };
    this.message = {
      heading: 'UI Architect',
      desc: 'What we eat, it makes a difference in our life. Healthy food does not always comes with good test.' +
        'We are here to help you to be health as well as take care of your test. Just let us know you.'
    };
    this.columnOneLinks = [
      {label: 'Privacy', url: '/privacy'}
    ];
    this.columnTwoLinks = [
      {label: 'profile', url: '/profile'}
    ];

  }

}
