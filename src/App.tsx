import './App.scss';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {ProductivityMultiTool} from './components/ProductivityMulti-tool';

export function App() {
  // const [count, setCount] = useState(0);

  return (
    <div id='page-top' className='page'>
      <Header />

      <div className='container'>
        <ProductivityMultiTool />
      </div>
      <Footer />
    </div>
  );
}
