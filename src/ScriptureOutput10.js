import './index.css';

function ScriptureOutput10(BibleText, scriptureReference){
    let randomSel = Math.floor(Math.random() * 10); 
   
    
    switch (randomSel){
        case 0: 
            console.log(randomSel); 
            BibleText = "26 Sojourn in this land, and I will be with thee, and will bless thee; for unto thee, and unto thy seed, I will give all these countries, and I will perform the oath which I sware unto Abraham thy father;"; 
            scriptureReference = "Genesis 26:3 KJV"; 
            break; 
        case 1: 
        console.log(randomSel);
            BibleText = "5 There shall not any man be able to stand before thee all the days of thy life: as I was with Moses, so I will be with thee: I will not fail thee, nor forsake thee."; 
            scriptureReference = "Joshua 1:5 KJV"; 
     
            break;
        case 2:
            console.log(randomSel);
            BibleText = "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness." ; 
            scriptureReference = "Isaiah 41:10 KJV";
            break;
        case 3:
            console.log(randomSel);
            BibleText = "A man that hath friends must shew himself friendly: and there is a friend that sticketh closer than a brother."; 
            scriptureReference = "Proverbs 18:24 KJV"; 
            break;
        case 4:
            console.log(randomSel);
            BibleText = "Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching."; 
            scriptureReference= "Hebrews 10:25 KJV"; 
     
            break;
        case 5:
            console.log(randomSel);
            BibleText = "18 The Lord is nigh unto all them that call upon him, to all that call upon him in truth."; 
            scriptureReference= "Psalms 145:18 KJV";  
      
            break;
        case 6:
            console.log(randomSel);
            BibleText = "28 Come unto me, all ye that labour and are heavy laden, and I will give you rest. ";
            scriptureReference= "Matthew 11:28  KJV"; 
     
            break;
        case 7:
            console.log(randomSel);
            BibleText = "6 Humble yourselves therefore under the mighty hand of God that he may exalt you in due time: 7 Casting all your care upon him; for he careth for you. "; 
            scriptureReference= "1 Peter 5:6-7 KJV"; 
      
            break;
        case 8: 
        console.log(randomSel);
        BibleText = "2 When thou passest through the waters, I will be with thee; and through the rivers, they shall not overflow thee: when thou walkest through the fire, thou shalt not be burned; neither shall the flame kindle upon thee."; 
        scriptureReference= "Isaiah 43:2 KJV"; 
    
            break;
        case 9: 
        console.log(randomSel);
        BibleText = "6 Be strong and of a good courage, fear not, nor be afraid of them: for the Lord thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee."; 
        scriptureReference= "Deuteronomy 31:6 KJV"; 
            break;
        default: 
            console.log("Waiting for Selection"); 
            break; 
    
    }

    return (
        <div>
           
        <br/><br/>
        <div className="App content AppHeader1">
        <h1>If you are <strong>Lonely</strong>, remember these words....</h1>

       
            <br/>
            <h2>{BibleText}</h2>
            <p>{scriptureReference}</p>

            <iframe width="50%" height="500"  src="https://www.youtube.com/embed/NBx2Z1QOKYA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>
        </div>
    ); 
}

export default ScriptureOutput10; 