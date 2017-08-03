import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  slides = [
    {
      title: "Welcome to the Docs!",
      description: "This is a <b>test App.</b>I am familiarizing myself with IONIC.",
      image: "assets/img/slide1.jpg",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/slide2.jpg",
    },
    {
      title: "Who am I?",
      description: "I am a web developer learning a new set of skills.",
      image: "assets/img/slide3.jpg",
    }
  ];
}
