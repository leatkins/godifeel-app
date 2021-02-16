import './index.css';

function ScriptureOutput3(BibleText, scriptureReference){
    let randomSel = Math.floor(Math.random() * 10); 
   
    
    switch (randomSel){
        case 0: 
            console.log(randomSel); 
            BibleText = "33 These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world."; 
            scriptureReference = "John 16:33 KJV"; 
            break; 
        case 1: 
        console.log(randomSel);
            BibleText = "8 I will both lay me down in peace, and sleep: for thou, Lord, only makest me dwell in safety."; 
            scriptureReference = "Psalms 4:8 KJV"; 
     
            break;
        case 2:
            console.log(randomSel);
            BibleText = "7 In his days shall the righteous flourish; and abundance of peace so long as the moon endureth." ; 
            scriptureReference = "Psalms 72:7 KJV";
            break;
        case 3:
            console.log(randomSel);
            BibleText = "19 And said, O man greatly beloved, fear not: peace be unto thee, be strong, yea, be strong. And when he had spoken unto me, I was strengthened, and said, Let my lord speak; for thou hast strengthened me."; 
            scriptureReference = "Daniel 10:19 KJV"; 
            break;
        case 4:
            console.log(randomSel);
            BibleText = "17 And the work of righteousness shall be peace; and the effect of righteousness quietness and assurance for ever."; 
            scriptureReference= "Isaiah 32:17 KJV"; 
     
            break;
        case 5:
            console.log(randomSel);
            BibleText = "27 How beautiful upon the mountains are the feet of him that bringeth good tidings, that publisheth peace; that bringeth good tidings of good, that publisheth salvation; that saith unto Zion, Thy God reigneth!"; 
            scriptureReference= "Isaiah 52:7 KJV";  
      
            break;
        case 6:
            console.log(randomSel);
            BibleText = "27 Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid"; 
            scriptureReference= "John 14:27 KJV"; 
     
            break;
        case 7:
            console.log(randomSel);
            BibleText = "8 O taste and see that the Lord is good: blessed is the man that trusteth in him."; 
            scriptureReference= "Psalms 34:8 KJV"; 
      
            break;
        case 8: 
        console.log(randomSel);
        BibleText = "1 Therefore being justified by faith, we have peace with God through our Lord Jesus Christ:"; 
        scriptureReference= "Romans 5:1 KJV"; 
    
            break;
        case 9: 
        console.log(randomSel);
        BibleText = "5 Trust in the Lord with all thine heart; and lean not unto thine own understanding."; 
        scriptureReference= "Proverbs 3:5 KJV"; 
            break;
        default: 
            console.log("Waiting for Selection"); 
            break; 
    
    }

    return (
        <div>
           
        <br/><br/>
        <div className="App content AppHeader1">
        <h1>If you are <strong>Nervous</strong>, remember these words....</h1>
            <hr/>
            <br/>
            <h2>{BibleText}</h2>
            <p>{scriptureReference}</p>

            <iframe width="80%" height="500"  src="https://www.youtube.com/embed/r5g7BN_mA38" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
    ); 
}

export default ScriptureOutput3; 