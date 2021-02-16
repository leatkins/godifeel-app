import './index.css';

function ScriptureOutput7(BibleText, scriptureReference){
    let randomSel = Math.floor(Math.random() * 10); 
   
    
    switch (randomSel){
        case 0: 
            console.log(randomSel); 
            BibleText = "22 Blessed are ye, when men shall hate you, and when they shall separate you from their company, and shall reproach you, and cast out your name as evil, for the Son of man's sake."; 
            scriptureReference = "Luke 6:22 KJV"; 
            break; 
        case 1: 
        console.log(randomSel);
            BibleText = "26 Be ye angry, and sin not: let not the sun go down upon your wrath:"; 
            scriptureReference = "Ephesians 4:26 KJV"; 
     
            break;
        case 2:
            console.log(randomSel);
            BibleText = "107 I am afflicted very much: quicken me, O Lord, according unto thy word." ; 
            scriptureReference = "Psalms 119:107 KJV";
            break;
        case 3:
            console.log(randomSel);
            BibleText = "I find then a law, that, when I would do good, evil is present with me."; 
            scriptureReference = "Romans 7:21KJV"; 
            break;
        case 4:
            console.log(randomSel);
            BibleText = "And let us not be weary in well doing: for in due season we shall reap, if we faint not."; 
            scriptureReference= "Galatians 6:9 KJV"; 
     
            break;
        case 5:
            console.log(randomSel);
            BibleText = "2 From the end of the earth will I cry unto thee, when my heart is overwhelmed: lead me to the rock that is higher than I."; 
            scriptureReference= "Psalms 61:2 KJV";  
      
            break;
        case 6:
            console.log(randomSel);
            BibleText = "1 Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race that is set before us,";
            scriptureReference= "Hebrews 12:1 KJV"; 
     
            break;
        case 7:
            console.log(randomSel);
            BibleText = "13 Ye are the salt of the earth: but if the salt have lost his savour, wherewith shall it be salted? it is thenceforth good for nothing, but to be cast out, and to be trodden under foot of men."; 
            scriptureReference= "Matthew 5:13 KJV"; 
      
            break;
        case 8: 
        console.log(randomSel);
        BibleText = "39 But I say unto you, That ye resist not evil: but whosoever shall smite thee on thy right cheek, turn to him the other also."; 
        scriptureReference= "Matthew 5:39 KJV"; 
    
            break;
        case 9: 
        console.log(randomSel);
        BibleText = "16 I will go in the strength of the Lord God: I will make mention of thy righteousness, even of thine only."; 
        scriptureReference= "Psalms 71:16 KJV"; 
            break;
        default: 
            console.log("Waiting for Selection"); 
            break; 
    
    }

    return (
        <div>
           
        <br/><br/>
        <div className="App content AppHeader1">
        <h1>If you are <strong>Annoyed/Frustrated</strong>, remember these words....</h1>
            
            <br/>
            <h2>{BibleText}</h2>
            <p>{scriptureReference}</p>

            <iframe width="50%" height="500"  src="https://www.youtube.com/embed/ERgFpPN5sq0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
    ); 
}

export default ScriptureOutput7; 