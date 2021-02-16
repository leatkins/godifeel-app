import './index.css';



function ScriptureOutput1(BibleText, scriptureReference){
    let randomSel = Math.floor(Math.random() * 10); 
   
    
    switch (randomSel){
        case 0: 
            console.log(randomSel); 
            BibleText = "7 Lift up your heads, O ye gates; and be ye lift up, ye everlasting doors; and the King of glory shall come in. \n 8 Who is the King of glory? The LORD stronog and mighty, the LORD  mighty in battle \n 9 Lift up your heads, O ye gates; even lift them up, ye everlasting doors; and the King of glory shall come in \n 10 Who is the King of glory? The LORD  of hosts, he is the King of glory. Selah"; 
            scriptureReference = "Psalms 24:7-10 KJV"; 
            
             
            break; 
        case 1: 
        console.log(randomSel);
            BibleText = "18 The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit"; 
            scriptureReference = "Psalms 34:18 KJV"; 
     
            break;
        case 2:
            console.log(randomSel);
            BibleText = "9 Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed; for the LORD thy God is with thee whiithersoever thou goest." ; 
            scriptureReference = "Joshua 1:9 KJV";
     
            break;
        case 3:
            console.log(randomSel);
            BibleText = "16 Rejoice evermore. \n 17 Pray without ceasing. \n 18 In every thing give thanks: for this is the will of God in Christ Jesus concerning you."; 
            scriptureReference = "1 Thessalonians 5:16-18 KJV"; 
            break;
        case 4:
            console.log(randomSel);
            BibleText = "3 Thou wilth keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee. "; 
            scriptureReference= "Isaiah 26:3 KJV"; 
     
            break;
        case 5:
            console.log(randomSel);
            BibleText = " 8 And the LORD, he it is that doth go before thee; he will be with thee, he will not fail thee, neither forsake thee: fear not, neither be dismayed."; 
            scriptureReference= "Deuteronomy 31:8  KJV";  
      
            break;
        case 6:
            console.log(randomSel);
            BibleText = "7 And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus. "; 
            scriptureReference= "Philippians 4:7 KJV"; 
     
            break;
        case 7:
            console.log(randomSel);
            BibleText = "8 Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report; if there be any virtue, and if there be any praise, think on these things. 9 Those things, which ye have both learned, and received, and heard, and seen in me, do: and the God of peace shall be with you."; 
            scriptureReference= "Philippians 4:8-9 KJV"; 
      
            break;
        case 8: 
        console.log(randomSel);
        BibleText = "27 Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid."; 
        scriptureReference= "John 14:27 KJV"; 
    
            break;
        case 9: 
        console.log(randomSel);
        BibleText = "10 Then he said unto them, Go your way, eat the fat, and drink the sweet, and send portions unto them for whom nothing is prepared: for this day is holy unto our Lord: neither be ye sorry; for the joy of the LORD is your strength."; 
        scriptureReference= "Nehemiah 8:10 KJV"; 
            break;
        default: 
            console.log("Waiting for Selection"); 
            break; 
    
    }

    return (
        <div>
           
        <br/><br/>
        <div className="App content AppHeader1">
        <h1>If you are <strong>Sad</strong>, remember these words....</h1>
            <hr/>
            <br/>
            <h2>{BibleText}</h2>
            <p>{scriptureReference}</p>

            <iframe width="80%" height="500"  src="https://www.youtube.com/embed/mTFGZN65Onk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
    ); 
}

export default ScriptureOutput1; 