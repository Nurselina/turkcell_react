import { useState } from "react";
import Colors from "./components/Colors";
import Counter from "./components/Counter";
import Employee from "./components/Employee";
import Form from "./components/Form";
import User from "./components/User";



function App() {
  const [isVisible, setisVisible] = useState(true)
  return (
    <div>
      <Form/>
      <hr />
      <br /> <br />
      <Colors/>
      <hr />
      <br />
      <Employee/>
      <hr />
      {isVisible && <Counter/>}
      <button onClick={() => setisVisible(!isVisible) }>Göster/Gizle</button>
      
    <User
     title= "Kişi"
    data={{
      name :'Nursel Özcan',
      city:'Ankara',
      age:30
    }} 
    friends={['Furkan','Sibel','Esra','Özge']}/>
    </div>
  );
}

export default App;
