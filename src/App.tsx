import './App.scss';
import {Footer} from './components/Footer';
import {Header} from './components/Header';

export function App() {
  // const [count, setCount] = useState(0);

  return (
    <div id='page-top' className='page'>
      <Header />
      <div className='container'>
        <div className='outletWrapper'>
          <Footer />
        </div>
      </div>
    </div>
  );
}
