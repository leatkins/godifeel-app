import './index.css';

function ScriptureOutput5(BibleText, scriptureReference){
    let randomSel = Math.floor(Math.random() * 10); 
   
    
    switch (randomSel){
        case 0: 
            console.log(randomSel); 
            BibleText = "15 Is any sick among you? let him call for the elders of the church; and let them pray over him, anointing him with oil in the name of the Lord:"; 
            scriptureReference = "James 5:14 KJV"; 
            break; 
        case 1: 
        console.log(randomSel);
            BibleText = "14 And the prayer of faith shall save the sick, and the Lord shall raise him up; and if he have committed sins, they shall be forgiven him."; 
            scriptureReference = "James 5:15 KJV"; 
     
            break;
        case 2:
            console.log(randomSel);
            BibleText = "107 I am afflicted very much: quicken me, O Lord, according unto thy word." ; 
            scriptureReference = "Psalms 119:107 KJV";
            break;
        case 3:
            console.log(randomSel);
            BibleText = "10 And ye shall serve the Lord your God, and he shall bless thy bread, and thy water; and I will take sickness away from the midst of thee."; 
            scriptureReference = "Isaiah 41:10 KJV"; 
            break;
        case 4:
            console.log(randomSel);
            BibleText = "17 For I will restore health unto thee, and I will heal thee of thy wounds, saith the Lord; because they called thee an Outcast, saying, This is Zion, whom no man seeketh after."; 
            scriptureReference= "Jeremiah 30:17 KJV"; 
     
            break;
        case 5:
            console.log(randomSel);
            BibleText = "4Surely he hath borne our griefs, and carried our sorrows: yet we did esteem him stricken, smitten of God, and afflicted. 5 But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed."; 
            scriptureReference= "Isaiah 53:4-5 KJV";  
      
            break;
        case 6:
            console.log(randomSel);
            BibleText = "14 If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land.";
            scriptureReference= "2 Chronicles 7:14 KJV"; 
     
            break;
        case 7:
            console.log(randomSel);
            BibleText = "39 See now that I, even I, am he, and there is no god with me: I kill, and I make alive; I wound, and I heal: neither is there any that can deliver out of my hand."; 
            scriptureReference= "Deuteronomy 32:39 KJV"; 
      
            break;
        case 8: 
        console.log(randomSel);
        BibleText = "6 Behold, I will bring it health and cure, and I will cure them, and will reveal unto them the abundance of peace and truth."; 
        scriptureReference= "Jeremaiah 33:6 KJV"; 
    
            break;
        case 9: 
        console.log(randomSel);
        BibleText = "2 Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth."; 
        scriptureReference= "3 John 1:2 KJV"; 
            break;
        default: 
            console.log("Waiting for Selection"); 
            break; 
    
    }

    return (
        <div>
           
        <br/><br/>
        <div className="App content AppHeader1">
        <h1>If you are <strong>Sick</strong>, remember these words....</h1>
            
            <br/>
            <h2>{BibleText}</h2>
            <p>{scriptureReference}</p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/GhGUWbhK_zU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
    ); 
}

export default ScriptureOutput5; 