import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransPage } from './trans.page';
// import { GoogleMap } from '@capacitor/google-maps';

// const apiKey = 'AIzaSyCimAQEHfarjsP_GqBWzFYDeaIBiMftfmA';

// const mapRef = document.getElementById('map');

// const newMap = await GoogleMap.create({
//   id: 'my-map', // Unique identifier for this map instance
//   element: mapRef, // reference to the capacitor-google-map element
//   apiKey: apiKey, // Your Google Maps API Key
//   config: {
//     center: {
//       // The initial position to be rendered by the map
//       lat: 33.6,
//       lng: -117.9,
//     },
//     zoom: 8, // The initial zoom level to be rendered by the map
//   },
// });

const routes: Routes = [
  {
    path: '',
    component: TransPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransPageRoutingModule {}
