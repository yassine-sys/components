import logo from './logo.svg';
import './App.css';
import Photo from './Component/Profile/ProfilPhoto';
import Name from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  return (
    <div id="root" className="App">
      <Photo></Photo>
     
      <Name></Name>
      <Address></Address>
      
      
    </div>
  );
}

export default App;
