import { PelisInterface } from './models/PelisInterface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';
  
  public top10:PelisInterface = {
    section: 'Top 10',
      films:[
      {
      imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Top10\1-papel.webp',
      titulo: 'La casa de papel',
      },
      {
      imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Top10\2-reina.webp',
      titulo: 'La reina del flow',
      },
      {
      imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Top10\3-titanes.webp',
      titulo: 'Titanes',
      },
      {
      imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Top10\4-lostinspace.webp',
      titulo: 'Lost in space',
      },
      {
      imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Top10\5-dondecaben.webp',
      titulo: 'Donde caben dos',
      },
      {
      imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Top10\6-aquinohay.webp',
      titulo: 'Aqui no hay quien viva',
      },
      {
      imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Top10\7-blacklist.webp',
      titulo: 'Blacklist',
      },
      {
      imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Top10\8-ricos.webp',
      titulo: 'Ricos y mimados',
      },
      {
      imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Top10\9-poder.webp',
      titulo: 'El poder del perro',
      },
      {
      imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Top10\10-gooddoctor.webp',
      titulo: 'the good doctor',
      }
  ],
  };
  public comedia:PelisInterface = {
  section: 'Comedia',
  films:[
  {
  imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Comedia\casi300.webp',
  titulo: 'Casi 300',
  },
  {
  imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Comedia\cazafantasmas.webp',
  titulo: 'Los Cazafantasmas',
  },
  {
  imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Comedia\dictador.webp',
  titulo: 'Dictador',
  },
  {
  imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Comedia\erasehollywood.webp',
  titulo: 'Erase una vez en Hollywood',
  },
  {
  imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Comedia\family guy.webp',
  titulo: 'Padre de familia',
  },
  {
  imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Comedia\juerga.webp',
  titulo: 'Juerga hasta el fin',
  },
  {
  imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Comedia\laterminal.webp',
  titulo: 'La terminal',
  },
  {
  imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Comedia\padresella.webp',
  titulo: 'Los padres de ella',
  },
  {
  imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Comedia\regresofuturo.webp',
  titulo: 'Regreso al futuro',
  },
  {
  imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Comedia\rickandmorty.webp',
  titulo: 'Rick and Morty',
  },
  {
  imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Comedia\scarymovie3.webp',
  titulo: 'Scary movie 3',
  },
  {
  imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Comedia\ted2.webp',
  titulo: 'Ted 2',
  },
],
  };
  public terror:PelisInterface = {
    section: 'Terror',
    films:[
    {
    imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Terror\apostol.jpg',
    titulo: 'Apostol',
    },
    {
    imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Terror\calleterror',
    titulo: 'La calle del terror',
    },
    {
    imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Terror\infiernoagua.webp',
    titulo: 'Infierno bajo el agua',
    },
    {
    imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Terror\insidious2.webp',
    titulo: 'Insidious 2',
    },
    {
    imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Terror\life.webp',
    titulo: 'Life',
    },
    {
    imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Terror\malasana.webp',
    titulo: 'Malasaña 32',
    },
    {
    imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Terror\multiple.webp',
    titulo: 'Multiple',
    },
    {
    imagen:'C:\Users\34671\Desktop\Falseflix\netflix-app\src\assets\images\Terror\reflejos.webp',
    titulo: 'Reflejos',
    },
    ]
  };

  }

