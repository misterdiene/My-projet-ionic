import { Component, OnInit } from '@angular/core';
//import { OperationsService } from '../../../services/operations.service.';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.page.html',
  styleUrls: ['./operations.page.scss'],
})
export class OperationsPage implements OnInit {

  envoieData = {};
  retraitData = {};

  constructor(private opera: OperationsService) { }

  ngOnInit() {
  }

  envoie(){
    this.opera.envoie(this.envoieData)
    .subscribe(
      data => {
        window.confirm('Envoie reussie');
        console.log(data);
      },
      err=> {
        window.confirm('Envoie echoué');
      }
    );
  }

  retrait(){
    this.opera.retrait(this.retraitData)
    .subscribe(
      data => {
        window.confirm('Retrait reussie');
        console.log(data);
      },
      err=> {
        window.confirm('Retrait echoué');
      }
    );
  }
 

}
