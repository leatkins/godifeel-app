import './index.css'
import ScriptureOutput from './ScriptureOutput'; 
import ScriptureOutput1 from './ScriptureOutput1';
import ScriptureOutput2 from './ScriptureOutput2'; 
import ScriptureOutput3 from './ScriptureOutput3'; 
import ScriptureOutput4 from './ScriptureOutput4'; 
import ScriptureOutput5 from './ScriptureOutput5'; 
import ScriptureOutput6 from './ScriptureOutput6'; 
import ScriptureOutput7 from './ScriptureOutput7'; 
import ScriptureOutput8 from './ScriptureOutput8'; 
import ScriptureOutput9 from './ScriptureOutput9';
import ScriptureOutput10 from './ScriptureOutput10'; 
import ScriptureOutput11 from './ScriptureOutput11'; 
import ReactDOM from 'react-dom';

function FindScripture (x){
    
    switch (x) {
        case "0": 
            console.log("Feeling is empty, please try again");
            break; 
        case "1": 
            console.log("Feeling: Happy"); 
            ReactDOM.render(
                <ScriptureOutput />, 
                document.getElementById('output')
            );
            break;
        case "2": 
            console.log("Feeling: Sad")
            ReactDOM.render (
                <ScriptureOutput1 />, 
                document.getElementById('output')
            ); 
            break;
        case "3": 
            console.log("Feeling:Grieved"); 
            ReactDOM.render (
                <ScriptureOutput2 />,
                document.getElementById('output')
            );
            break; 

        case "4": 
            console.log("Feeling: Nervous"); 
            ReactDOM.render (
                <ScriptureOutput3 />, 
                document.getElementById('output')
            );
            break;
            
        case "5": 
            console.log("Feeling Afraid"); 
            ReactDOM.render(
                <ScriptureOutput4 />,
                document.getElementById('output')
            ); 
            break; 

        case "6": 
            console.log("Feeling: Sick"); 
            ReactDOM.render(
                <ScriptureOutput5 />, 
                document.getElementById('output')
            ); 
            break;
            
            case "7": 
            console.log("Feeling: Disgusted"); 
            ReactDOM.render(
                <ScriptureOutput6 />, 
                document.getElementById('output')
            ); 
            break; 

            case "8":
            console.log("Feeling: Annoyed/Frustrated");
            ReactDOM.render(
                <ScriptureOutput7 />,
                document.getElementById('output')
                );
            break; 
            case "9": 
            console.log("Feeling: Worried"); 
            ReactDOM.render(
                <ScriptureOutput8 />, 
                document.getElementById('output')
            );
            break;

            case "10":
            console.log("Feeling: Broken");
            ReactDOM.render(
                <ScriptureOutput9 />,
                document.getElementById('output')
            );

            break; 

            case "11":
                console.log("Feeling: Alone"); 
                ReactDOM.render(
                    <ScriptureOutput10 />, 
                    document.getElementById('output')
                );
            break; 
        default: 
            console.log("Please Enter a value"); 
            break; 

            case "12":
                console.log("Feeling: Confused");
                ReactDOM.render(
                    <ScriptureOutput11 />, 
                    document.getElementById('output')
                );
                break; 

            
    }
}

function FeelingForm() { 
    return (
        <div className="App">
        

<select id="feelingValue">
      <option value="0" > -- </option>
      <option value="1">Happy</option>
      <option value="2">Sad</option>
      <option value="3">Grieved</option>
      <option value="4"> Nervous</option>
      <option value="5">Afraid</option>
      <option value="6">Sick</option>
      <option value="7">Disgusted</option>
      <option value ="8">Annoyed/Frustrated</option>
      <option value ="9">Worried</option>
      <option value="10">Broken</option>
      <option value = "11">Lonely</option>
      <option value = "12">Confused</option>
    </select>
      <button className="submitButton" onClick={() => {
          FindScripture(document.getElementById("feelingValue").value)
      }}>Submit
      </button>
      <div id="output"></div>
        </div> 

        

    ); 
}

export default FeelingForm;