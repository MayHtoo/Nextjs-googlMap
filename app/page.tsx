'use client'
import Map from './components/Map';
const Page = () => {
  const address = '1600 Amphitheatre Parkway, Mountain View, CA';
  return (
    <div>
      <h1>Google Maps Example</h1>
      <Map address={address} />
    </div>
  );
};
export default Page;