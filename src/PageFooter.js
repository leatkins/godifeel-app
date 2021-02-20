import './index.css'; 
import tanyabrown from './images/tb_im-footerIMG.jpg'; 

function PageFooter(){
    return (
        <div>
            <a href="https://www.tanyabrownministries.org/" target="_blank"><img src={tanyabrown} height="250px" /><br/><p><strong>Tanya Brown International Ministries</strong></p></a>
            <hr/>
        </div> 
       
        );
}

export default PageFooter; 