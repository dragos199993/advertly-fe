import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'raf/polyfill';

configure({ adapter: new Adapter() });

const matchMedia: any = () => {
  return {
    matches: false,
    // tslint:disable-next-line:no-empty typedef
    addListener() {
    },
    // tslint:disable-next-line:no-empty typedef
    removeListener() {
    }
  };
};

window.matchMedia =
  window.matchMedia ||
  matchMedia;
