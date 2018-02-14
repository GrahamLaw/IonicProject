import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Nav, Platform, ModalController  } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  comment: FormGroup;
  
    constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public viewCtrl: ViewController,
      private formBuilder: FormBuilder ) {
  
        this.comment = this.formBuilder.group({
          rating: [3, Validators.required],
          comment: ['', Validators.required],
          author: ['', Validators.required],
          date: '',
        });
    }
  
    dismiss() {
      this.viewCtrl.dismiss();
    }
  
    onSubmit() {
      let d = new Date();
      let dstring = d.toISOString();
       this.comment.controls['date'].setValue(dstring);
      console.log(this.comment.value);
      this.viewCtrl.dismiss(this.comment.value);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }


}
