import React from 'react';
import Header from './components/Header';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';
import Signup from './components/CoolButton';
import Container from './components/Container';


const App = () => {
   return (
   <div className="App">
      <Header/>
      <main className="container">
      <div className="columns">
  <div className="column is-one-quarter">
  <main className="container">
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <CoolButton isSmall isDanger className= "is-rounded my-class is-danger is-small">Button 1</CoolButton>
            <CoolButton isSmall isSuccess>Button 2</CoolButton>
         </main>
        
  </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  <div className="column is-one-quarter">
  
  </div>
  <div className="columns is-clearfix">
  <div className="column is-half">
  <main className="container">
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="e.g. q8W6y7i96E" />
            <CoolButton isSmall isSuccess className="is clearfix">Submit</CoolButton>
         </main>
  </div>
  </div>
</div>  
</main> 
<main className="container is-one-quarter">
<Container/>
</main>
    </div>  
    
   )
   
};

export default App;