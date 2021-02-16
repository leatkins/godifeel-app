import './index.css';

function ScriptureOutput2(BibleText, scriptureReference){
    let randomSel = Math.floor(Math.random() * 10); 
   
    
    switch (randomSel){
        case 0: 
            console.log(randomSel); 
            BibleText = "5 For his anger endureth but a moment; in his favour is life: weeping may endure for a night, but joy cometh in the morning."; 
            scriptureReference = "Psalms 30:5 KJV"; 
            break; 
        case 1: 
        console.log(randomSel);
            BibleText = "1 To every thing there is a season, and a time to every purpose under the heaven: 2 A time to be born, and a time to die; a time eto plant, and a time to pluck up that which is planted; 3 a time to kill, and a time to heal; a time to break down, and a time to build up; 4 A time to weep, and a time to laugh; a time to mourn, and a time to dance;"; 
            scriptureReference = "Ecclesiastes 3:1-4 KJV"; 
     
            break;
        case 2:
            console.log(randomSel);
            BibleText = "23 For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord." ; 
            scriptureReference = "Romans 6:23 KJV";
            break;
        case 3:
            console.log(randomSel);
            BibleText = "33 These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world."; 
            scriptureReference = "John 16:33 KJV"; 
            break;
        case 4:
            console.log(randomSel);
            BibleText = "Blessed are they that mourn: for they shall be comforted"; 
            scriptureReference= "Matthew 5:4 KJV"; 
     
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
        <h1>If you are <strong>Grieving</strong>, remember these words....</h1>
            <hr/>
            <br/>
            <h2>{BibleText}</h2>
            <p>{scriptureReference}</p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/PRTfiEc4M-k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
    ); 
}

export default ScriptureOutput2; 