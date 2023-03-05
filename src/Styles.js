import './App.css';
import styles  from './App.module.css';
import Test from './Test';
import {  Title } from "./Components";
import Bootstrap from './Bootstrap';
import Tailwind from './Tailwind';
import './tailwind.css';
function Styles(){
    return (
        <div className={styles.App}>
          <Bootstrap/>
          <Tailwind/>
       <Test/>
          <h3>{process.env.NODE_ENV}</h3>
          <Title>{process.env.REACT_APP_API_URL}</Title>
          <Title theme='dark'>{process.env.REACT_APP_API_URL}</Title>
          {
            process.env.NODE_ENV === 'production' && (
              <div>
                <h1>Salam Menim adim Abdulhasan di</h1>
              </div>
            )
          }
        </div>
      );
}
export default Styles