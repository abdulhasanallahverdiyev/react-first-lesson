import { createElement, useState } from "react";
import './tailwind.css'
import Button from "./components/Button";
import Tab from "./components/Tab";
function Profile() {
  return (
    <div>
      Burasi profil tab
    </div>
  )
}
function Btn(props) {
  return <button>{props.text}</button>
}
function App() {
  const name = '{Tayfun}'
  const todos = ['todo1', 'todo2', 'todo3']
  const [activeTab,setActiveTab]=useState(1)
  // const h1=createElement('h1',null,'karvanmedia.az')
  // const ul=createElement('ul',null,todos.map(todo=>createElement('li',null,todo)))
  // return createElement('main',{
  //   className: 'test',
  //   id: 'main',
  // },'main content',h1,ul)
  const searchFunction = () => {
    alert('hello!')
  }
  return (

    <>
      <div style={{ padding: 20 }}>
        <button onClick={()=>setActiveTab(2)}>
          aktiv tab degistir
        </button>
        <Tab activeTab={activeTab} onChange={tabIndex=>setActiveTab(tabIndex)}>
          <Tab.Panel title="Profil"><Profile/></Tab.Panel>
          <Tab.Panel title="Hakkında">2. Tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3. Tab</Tab.Panel>
        </Tab>
    {activeTab===2 && (
      <div>
        burasi da ekstra alan
      </div>
    )}
      </div>
      <div style={{ padding: 20 }}>
        <Button>
          button orneyi
        </Button>
        <Button variant="success">
          button orneyi
        </Button>

        <Button variant="danger">
          button orneyi
        </Button>
        <Button variant="warning">
          button orneyi
        </Button>
      </div>
      <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>neymantech.com</h1>
      <label htmlFor="search">Arama</label>
      <input type="text" name="" id="search" />
      <ul>
        {name}
        {
          todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))
        }
      </ul>
    </>
  );
}

export default App;
// 8 qeder bax