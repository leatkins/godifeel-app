import './index.css';

function ScriptureOutput8(BibleText, scriptureReference){
    let randomSel = Math.floor(Math.random() * 10); 
   
    
    switch (randomSel){
        case 0: 
            console.log(randomSel); 
            BibleText = "31 Therefore take no thought, saying, What shall we eat? or, What shall we drink? or, Wherewithal shall we be clothed? 32 (for after all these things do the Gentiles seek:) for your heavnly Fathere knoweth that ye have need of all these things. 33 But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you. 34 Take therefore no thought for the morrow; for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof."; 
            scriptureReference = "Matthew 6:31-34 KJV"; 
            break; 
        case 1: 
        console.log(randomSel);
            BibleText = "6 Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God."; 
            scriptureReference = "Philippians 4:6 KJV"; 
     
            break;
        case 2:
            console.log(randomSel);
            BibleText = "4 I sought the Lord, and he heard me, and delivered me from all my fears." ; 
            scriptureReference = "Psalms 34:4 KJV";
            break;
        case 3:
            console.log(randomSel);
            BibleText = "38 For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, 39 Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord."; 
            scriptureReference = "Romans 8:38-39 KJV"; 
            break;
        case 4:
            console.log(randomSel);
            BibleText = "5 Trust in the Lord with all thine heart; and lean not unto thine own understanding. 6 In all thy ways acknowledge him, and he shall direct thy paths."; 
            scriptureReference= "Proverbs 3:5-6 KJV"; 
     
            break;
        case 5:
            console.log(randomSel);
            BibleText = "7 Blessed is the man that trusteth in the Lord, and whose hope the Lord is. 8 For he shall be as a tree planted by the waters, and that spreadeth out her roots by the river, and shall not see when heat cometh, but her leaf shall be green; and shall not be careful in the year of drought, neither shall cease from yielding fruit."; 
            scriptureReference= "Jeremiah 17:7-8 KJV";  
      
            break;
        case 6:
            console.log(randomSel);
            BibleText = "Come unto me, all ye that labour and are heavy laden, and I will give you rest. 29 Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls. 30 For my yoke is easy, and my burden is light. ";
            scriptureReference= "Matthew 11:28-30 KJV"; 
     
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
        BibleText = "5 I called upon the LORD in distress: the LORD answered me, and set me in a large place. 6 The LORD  is on my side; I will not fear: what can man do unto me?"; 
        scriptureReference= "Psalms 118:5-6 KJV"; 
            break;
        default: 
            console.log("Waiting for Selection"); 
            break; 
    
    }

    return (
        <div>
           
        <br/><br/>
        <div>
        <h1>If you are <strong>Worried</strong>, remember these words....</h1>
            
            <br/>
            <h2>{BibleText}</h2>
            <p>{scriptureReference}</p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/DgeNhBzUpzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
    ); 
}

export default ScriptureOutput8; 