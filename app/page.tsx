'use client'
import Head from 'next/head';
import Map from './components/Map';
const markers = [
  { position: { lat: 13.740688453393423, lng: 100.65104828867743 }, title: 'Marker 1' ,description: 'This is the first marker.'},
  { position: { lat: 13.753356252395013, lng: 100.65736799178923 }, title: 'Marker 2' ,description: 'This is the second marker.'},
  { position: { lat: 13.758843589748373, lng: 100.65239670473926 }, title: 'Marker 3' ,description: 'This is the third marker.'},
];
export default function Page() {
  return (
    <div>
      <Head>
        <title>My Google Maps App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1> Google Maps testing</h1>
        <Map markers={markers} />
      </main>
    </div>
  );
}
