import './index.css';

function ScriptureOutput(BibleText, scriptureReference){
    let randomSel = Math.floor(Math.random() * 10); 
   
    
    switch (randomSel){
        case 0: 
            console.log(randomSel); 
            BibleText = "13Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost."; 
            scriptureReference = "Romans 15:13 KJV"; 
            
             
            break; 
        case 1: 
        console.log(randomSel);
            BibleText = "3 Thou hast multiplied the nation, and not increased the joy: they joy before thee according to the joy in harvest, and as men rejoice when they divide the spoil."; 
            scriptureReference = "Isaiah 9:3 KJV"; 
     
            break;
        case 2:
            console.log(randomSel);
            BibleText = "28 The hope of the righteous shall be gladness: but the expectation of the wicked shall perish." ; 
            scriptureReference = "Proverbs 10:28 KJV";
     
            break;
        case 3:
            console.log(randomSel);
            BibleText = "16 Rejoice evermore. \n 17 Pray without ceasing. \n 18 In every thing give thanks: for this is the will of God in Christ Jesus concerning you."; 
            scriptureReference = "1 Thessalonians 5:16-18 KJV"; 
            break;
        case 4:
            console.log(randomSel);
            BibleText = "Go thy way, eat thy bread with joy, and drink thy wine with a merry heart; for God now accepteth thy works."; 
            scriptureReference= "Ecclesiastes 9:7 KJV"; 
     
            break;
        case 5:
            console.log(randomSel);
            BibleText = "24 Hitherto have ye asked nothing in my name: ask, and ye shall receive, that your joy may be full."; 
            scriptureReference= "John 16:24 KJV";  
      
            break;
        case 6:
            console.log(randomSel);
            BibleText = " 1 I will bless the Lord at all times: his praise shall continually be in my mouth."; 
            scriptureReference= "Psalms 34:1 KJV"; 
     
            break;
        case 7:
            console.log(randomSel);
            BibleText = "8 O taste and see that the Lord is good: blessed is the man that trusteth in him."; 
            scriptureReference= "Psalms 34:8 KJV"; 
      
            break;
        case 8: 
        console.log(randomSel);
        BibleText = "5 Happy is that people, that is in such a case: yea, happy is that people, whose God is the Lord."; 
        scriptureReference= "Psalms 144:15 KJV"; 
    
            break;
        case 9: 
        console.log(randomSel);
        BibleText = "4 Rejoice in the Lord alway: and again I say, Rejoice."; 
        scriptureReference= "Philippians 4:4 KJV"; 
            break;
        default: 
            console.log("Waiting for Selection"); 
            break; 
    
    }

    return (
        <div>
           
        <br/><br/>
        <div className="App content AppHeader1">
        <h1>If you are <strong>Happy</strong>, remember these words....</h1>
            <hr/>
            <br/>
            <h2>{BibleText}</h2>
            <p>{scriptureReference}</p>
            <iframe width="50%" height="500" src="https://www.youtube.com/embed/GIFzDfPuuZk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
    ); 
}

export default ScriptureOutput; 