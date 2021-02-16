import './index.css';

function ScriptureOutput9(BibleText, scriptureReference){
    let randomSel = Math.floor(Math.random() * 10); 
   
    
    switch (randomSel){
        case 0: 
            console.log(randomSel); 
            BibleText = "10 Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness."; 
            scriptureReference = "Isaiah 41:10 KJV"; 
            break; 
        case 1: 
        console.log(randomSel);
            BibleText = "4 And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away."; 
            scriptureReference = "Revelations 21:4 KJV"; 
     
            break;
        case 2:
            console.log(randomSel);
            BibleText = "1 God is our refuge and strength, a very present help in trouble." ; 
            scriptureReference = "Psalms 46:1 KJV";
            break;
        case 3:
            console.log(randomSel);
            BibleText = "3He healeth the broken in heart, and bindeth up their wounds."; 
            scriptureReference = "Psalms 147:3 KJV"; 
            break;
        case 4:
            console.log(randomSel);
            BibleText = "17 The Lord thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing."; 
            scriptureReference= "Zephaniah 3:17 KJV"; 
     
            break;
        case 5:
            console.log(randomSel);
            BibleText = "33 These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world."; 
            scriptureReference= "John 16:33 KJV";  
      
            break;
        case 6:
            console.log(randomSel);
            BibleText = "9 And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me.";
            scriptureReference= "2 Corinthians 12:9  KJV"; 
     
            break;
        case 7:
            console.log(randomSel);
            BibleText = "6 Humble youorselves therefore under the mighty hand of God that he may exalt you in due time: 7 Casting all your care upon him; for he careth for you. "; 
            scriptureReference= "1 Peter 5:6-7 KJV"; 
      
            break;
        case 8: 
        console.log(randomSel);
        BibleText = "2 Cast thy burden upon the Lord, and he shall sustain thee: he shall never suffer the righteous to be moved."; 
        scriptureReference= "Psalms 55:22 KJV"; 
    
            break;
        case 9: 
        console.log(randomSel);
        BibleText = "10 Then he said unto them, Go your way, eat the fat, and drink the sweet, and send portions unto them for whom nothing is prepared: for this day is holy unto our Lord: neither be ye sorry; for the joy of the Lord is your strength."; 
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
        <h1>If you are <strong>Broken</strong>, remember these words....</h1>
            
            <br/>
            <h2>{BibleText}</h2>
            <p>{scriptureReference}</p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/PZCErpzLO1E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
    ); 
}

export default ScriptureOutput9; 