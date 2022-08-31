import './App.css';
import ListItem from './components/ListItem';

let list = [
  {
    icon: './img/check.png',
    task: 'Hit the gym',
    img: './img/gym.png',
  },
  {
    icon: './img/doing.png',
    task: 'Pay bills',
    img: './img/bill.png'
  },
  {
    icon: './img/doing.png',
    task: 'Meet George',
    img: './img/dance.png',
  },
  {
    icon: './img/doing.png',
    task: 'Buy eggs',
    img: './img/eat.png',
  },
  {
    icon: './img/no.png',
    task: 'Read book',
    img: './img/book.png',
  },
  {
    icon: './img/no.png',
    task: 'Organize office',
    img: './img/organize.png'
  },
]


function App() {
  return (
    <div className="App">
      <ListItem tasks={list}/>
      
    </div>
  );
}

export default App;
