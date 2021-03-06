import './App.css';

import FeelingForm from './FeelingForm'; 
import logo from './images/GodiFeel-appLogo1.png'
import PageFooter from './PageFooter'; 


function App() {
   
  return (
    <div className="App">
      <div className="content">
      <header className="AppHeader">
      <img src={logo} height="200px" className="App-logo" alt="App Logo" /><br/>
        
        <h2>The Word of God for every state of mind!</h2>
        
        <p>"This High Priest of ours understands our weaknesses, for he faced all of the same testings we do, yet he did not sin"<br/><strong>Hebrews 4:15 NLT</strong></p>
        

        <h1>How are you Feeling Today?</h1>
      <FeelingForm />
      </header>
      
       
        <br /> 
      <footer>

        <PageFooter /> 

      </footer>
     
    </div>
    </div>
  );
}



export default App;
 

