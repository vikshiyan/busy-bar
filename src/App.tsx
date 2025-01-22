import './App.scss';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {LiveBusy} from './components/LiveBusy';
import {ManualControls} from './components/ManualControls';
import {Monochrome} from './components/Monochrome';
import {ProductivityMultiTool} from './components/ProductivityMulti-tool';

export function App() {
  return (
    <div id='page-top' className='page'>
      <Header />
      <main>
        <ProductivityMultiTool />
        <LiveBusy />
        <ManualControls />
        <Monochrome />
      </main>
      <Footer />
    </div>
  );
}
