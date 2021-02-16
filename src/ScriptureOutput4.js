import './index.css';

function ScriptureOutput4(BibleText, scriptureReference){
    let randomSel = Math.floor(Math.random() * 10); 
   
    
    switch (randomSel){
        case 0: 
            console.log(randomSel); 
            BibleText = "1 Let not your heart be troubled: ye believe in God, believe also in me."; 
            scriptureReference = "John 14:1 KJV"; 
            break; 
        case 1: 
        console.log(randomSel);
            BibleText = "27 Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid."; 
            scriptureReference = "John 14:27 KJV"; 
     
            break;
        case 2:
            console.log(randomSel);
            BibleText = "15 For ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father." ; 
            scriptureReference = "Romans 8:15 KJV";
            break;
        case 3:
            console.log(randomSel);
            BibleText = " 7 For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind."; 
            scriptureReference = "2 Timothy 1:7 KJV"; 
            break;
        case 4:
            console.log(randomSel);
            BibleText = "18 There is no fear in love; but perfect love casteth out fear: because fear hath torment. He that feareth is not made perfect in love."; 
            scriptureReference= "1 John 4:18 KJV"; 
     
            break;
        case 5:
            console.log(randomSel);
            BibleText = "And the Lord said unto him, Peace be unto thee; fear not: thou shalt not die."; 
            scriptureReference= "Judges 6:23 KJV";  
      
            break;
        case 6:
            console.log(randomSel);
            BibleText = "Fear not, O land; be glad and rejoice: for the Lord will do great things.";
            scriptureReference= "Joel 2:21 KJV"; 
     
            break;
        case 7:
            console.log(randomSel);
            BibleText = "8 O taste and see that the Lord is good: blessed is the man that trusteth in him."; 
            scriptureReference= "Psalms 34:8 KJV"; 
      
            break;
        case 8: 
        console.log(randomSel);
        BibleText = "3 And he said, I am God, the God of thy father: fear not to go down into Egypt; for I will there make of thee a great nation:"; 
        scriptureReference= "Genesis 46:3 KJV"; 
    
            break;
        case 9: 
        console.log(randomSel);
        BibleText = "32 Fear not, little flock; for it is your Father's good pleasure to give you the kingdom."; 
        scriptureReference= "Luke 12:32 KJV"; 
            break;
        default: 
            console.log("Waiting for Selection"); 
            break; 
    
    }

    return (
        <div>
           
        <br/><br/>
        <div className="App content AppHeader1">
        <h1>If you are <strong>Afraid</strong>, remember these words....</h1>
            
            <br/>
            <h2>{BibleText}</h2>
            <p>{scriptureReference}</p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/BVZxU2mHzVY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
    ); 
}

export default ScriptureOutput4; 