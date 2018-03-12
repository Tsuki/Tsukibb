import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit {

  constructor() {
    // initializeOnAngular();
    // firebase.init({
    //   iOSEmulatorFlush: true
    // }).then(instance => {
    //     console.log('firebase.init done');
    //   }, error => {
    //     console.log('firebase.init error: ' + error);
    //   }
    // );
  }

  ngOnInit() {

  }
}
