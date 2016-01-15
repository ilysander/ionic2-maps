import {Page,Geolocation} from 'ionic/ionic';

@Page({
  templateUrl: 'app/pages/map/map.html',
})
export class MapPage {
  constructor() {
  	this.map = null;
  	this.loadMap();
  }

  loadMap(){
  	let options = {timeout: 1000,enableHighAccuracy:true};

  	Geolocation.getCurrentPosition(options).then((position) =>{
  		let latLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
  	
  		let mapOptions = {
  			center:latLng,
  			zoom:15,
  			mapTypeId:google.maps.MapTypeId.ROADMAP
  		};

  		this.map = new google.maps.Map(document.getElementById("map"),mapOptions);

  	});
  }
}
