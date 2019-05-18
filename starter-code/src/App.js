import React from 'react';
import Header from './components/Header';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';


function App() {
  return (
    <div>
        <div className="App container">
            <Header/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <CoolButton  Class= "button is-rounded my-class is-danger is-small" Name="Button1" />
            <CoolButton  Class= "button is-big is-success" Name="Button2" />
         </div>
    </div>
  );
}

export default App;