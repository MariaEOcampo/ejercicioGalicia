import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.component.html',
  styleUrls: ['./redeem.component.scss']
})
export class RedeemComponent implements OnInit {

  cardOptions:string[]=['Naranja','Visa','Mastercard']

  constructor() { }

  ngOnInit(): void {
  }

}
