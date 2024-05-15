import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
    apiKey: 'AIzaSyBEH6CtSIDi5YsTGfcHebGykudRsi_PJIc',
    version: 'weekly',
    libraries: ['places'],
  });
  export default loader;