import {App, Platform, Config} from 'ionic/ionic';
import {MapPage} from './pages/map';

@App({
  template: `
    <ion-nav [root]="root"></ion-nav>
  `,
  // Check out the config API docs for more info
  // http://ionicframework.com/docs/v2/api/config/Config/
  config: {}

})
export class MyApp {
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    this.root = MapPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
    });
  }
}
