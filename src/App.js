import './App.css';
import Navbar from './Navbar';
import TextContent from './TextContent';
import Cardcontent  from './Cardcontent';
import data from './data';
function App() {
  const cards= data.map(e=>
    {
      return (<Cardcontent 
                key={e.id}
                obj={e}
      />)
    })
  return (
    <div className="App">
        <Navbar/>  
        <TextContent/>
        <div className='cards-list'>{cards}</div>
    </div>
  );
}

export default App;
