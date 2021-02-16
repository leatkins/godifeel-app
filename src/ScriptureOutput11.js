import './index.css';

function ScriptureOutput11(BibleText, scriptureReference){
    let randomSel = Math.floor(Math.random() * 10); 
   
    
    switch (randomSel){
        case 0: 
            console.log(randomSel); 
            BibleText = "For God is not the author of confusion, but of peace, as in all churches of the saints."; 
            scriptureReference = "1 Corinthians 14:33 KJV"; 
            break; 
        case 1: 
        console.log(randomSel);
            BibleText = "8 Be sober, be vigilant; because your adversary the devil, as a roaring lion, walketh about, seeking whom he may devour:"; 
            scriptureReference = "1 Peter 5:8 KJV"; 
     
            break;
        case 2:
            console.log(randomSel);
            BibleText = "11Lest Satan should get an advantage of us: for we are not ignorant of his devices." ; 
            scriptureReference = "2 Corinthians 2:11 KJV";
            break;
        case 3:
            console.log(randomSel);
            BibleText = "7 Submit yourselves therefore to God. Resist the devil, and he will flee from you."; 
            scriptureReference = "James 4:7 KJV"; 
            break;
        case 4:
            console.log(randomSel);
            BibleText = "8 A double minded man is unstable in all his ways."; 
            scriptureReference= "James 1:8 KJV"; 
     
            break;
        case 5:
            console.log(randomSel);
            BibleText = "38 And he said unto them, Why are ye troubled? and why do thoughts arise in your hearts?"; 
            scriptureReference= "Luke 24:38 KJV";  
      
            break;
        case 6:
            console.log(randomSel);
            BibleText = "Fret not thyself because of evildoers, neither be thou envious against the workers of iniquity.";
            scriptureReference= "Psalms 37:1 KJV"; 
     
            break;
        case 7:
            console.log(randomSel);
            BibleText = "4In whom the god of this world hath blinded the minds of them which believe not, lest the light of the glorious gospel of Christ, who is the image of God, should shine unto them. "; 
            scriptureReference= "2 Corinthians 4:4 KJV"; 
      
            break;
        case 8: 
        console.log(randomSel);
        BibleText = "10 The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly."; 
        scriptureReference= "John 10:10 KJV"; 
    
            break;
        case 9: 
        console.log(randomSel);
        BibleText = "7 For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind."; 
        scriptureReference= "2 Timothy 1:7 KJV"; 
            break;
        default: 
            console.log("Waiting for Selection"); 
            break; 
    
    }

    return (
        <div>
           
        <br/><br/>
        <div className="App content AppHeader1">
        <h1>If you are <strong>Confused</strong>, remember these words....</h1>

      
            <br/>
            <h2>{BibleText}</h2>
            <p>{scriptureReference}</p>

            <iframe width="80%" height="500"  src="https://www.youtube.com/embed/292BxXqbKCo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>
        </div>
    ); 
}

export default ScriptureOutput11; 