import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditService} from '../../app/services/reddits.service';
import {DetailsPage} from '../details/details'

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html',
})
export class RedditsPage {
  items:any;
  constructor(public navCtrl: NavController,private redditsService:RedditService) {

  }

ngOnInit(){
  this.getPosts('sports',10);

}

  getPosts(category,limit){
    this.redditsService.getPosts(category,limit).subscribe(
      response => {
        this.items=response.data.children;
        console.log(this.items);
      }
    );
  }

  viewItem(item){
        this.navCtrl.push(DetailsPage,{
          item: item
        });

  }

}
