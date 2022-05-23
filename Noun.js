
const Noun2 = [

    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  just  	  _______________     </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  hate  	  _______________     </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  child  	  _______________     </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  kind  	  _______________      </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  generous   _______________       </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  stupid  	  _______________     </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  move  	  _______________      </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  good  	  _______________      </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  poor  	  _______________     </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  brave  	  _______________    </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  calm  	  _______________      </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  slave  	  _______________     </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  true  	  _______________     </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  believe   _______________     </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  confuse  	  _______________      </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  dishonest   _______________       </li>" ,
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  resist  	  _______________     </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  bore  	  _______________     </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  mimic  	  _______________     </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  possess   _______________    </li>"

]

const Noun3 = [


    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>     tree   _______________________________________________________<br>   _______________________________________________________</li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  bicycle   __________________________________________________<br>__________________________________________________</li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>    letter   __________________________________________________<br>__________________________________________________  </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>    table   __________________________________________________<br>__________________________________________________  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  students  __________________________________________________<br>__________________________________________________  </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;>  store  __________________________________________________<br>__________________________________________________  </li>",


]


//noun tick done script --->
function StartNoun(){
    var a = document.getElementById('chgN').innerText;
    if(a === "OK"){
        console.log('ok');
    document.getElementById('NOUN').style.display = "flex";
    document.getElementById('chgN').innerText = 'not ok';
    }if(a === "not ok"){
    document.getElementById('NOUN').style.display = "none";
    document.getElementById('chgN').innerText = 'OK';
}
}
function Startnoun1(){
    var a = document.getElementById('chgN1').innerText;
    if(a === "OK"){
    var o = document.getElementById('pron').innerHTML;    
    document.getElementById('Startnoun1').style.display= "inline-block";
    document.getElementById('pron').innerHTML = o + '<br><li style="font-family:Calibri,sans-serif;font-size: 13.33px;"> Fill in the blanks with suitable nouns.    <tab class="tab"></tab>  [<tab id="NoForNoun">8</tab> x 1] <br> <ol style="padding-left: 3%;" id="setnoun"></ol></li>';
    document.getElementById('chgN1').innerText = 'not ok';
    console.log(document.getElementById('pron').innerHTML);
    console.log(document.getElementById('chgN1').innerText);
}
    if(a === "not ok"){
        var o = document.getElementById('pron').innerHTML;
        document.getElementById('Noofnoun').value ='';
        var str = o;
        str = str.replace('<br><li style="font-family:Calibri,sans-serif;font-size: 13.33px;"> Fill in the blanks with suitable nouns.    <tab class="tab"></tab>  [<tab id="NoForNoun">8</tab> x 1] <br> <ol style="padding-left: 3%;" id="setnoun"></ol></li>','');
        console.log(str);
        document.getElementById('pron').innerHTML = str;
        document.getElementById('Startnoun1').style.display= "none";
        document.getElementById('chgN1').innerText = 'OK';}
}


function Startnoun2(){
    var a = document.getElementById('chgN2').innerText;
    if(a === "OK"){
    var o = document.getElementById('pron').innerHTML;    
    document.getElementById('Startnoun2').style.display= "inline-block";
    document.getElementById('pron').innerHTML = o + '<br><li style="font-family:Calibri,sans-serif;font-size: 13.33px;"> Use suitable suffixes to form abstract nouns of these words.    <tab class="tab"></tab>  [<tab id="NoForNoun2">8</tab> x 1] <br> <ol style="padding-left: 3%;" id="setnoun2"></ol></li>';
    document.getElementById('chgN2').innerText = 'not ok';
}
    if(a === "not ok"){
        var o = document.getElementById('pron').innerHTML;
        document.getElementById('Noofnoun2').value ='';
        var str = o;
        str = str.replace('<br><li style="font-family:Calibri,sans-serif;font-size: 13.33px;"> Use suitable suffixes to form abstract nouns of these words.    <tab class="tab"></tab>  [<tab id="NoForNoun2">8</tab> x 1] <br> <ol style="padding-left: 3%;" id="setnoun2"></ol></li>','');
        document.getElementById('pron').innerHTML = str;
        document.getElementById('Startnoun2').style.display= "none";
        document.getElementById('chgN2').innerText = 'OK';}
}
function Startnoun3(){
    var a = document.getElementById('chgN3').innerText;
    if(a === "OK"){
    var o = document.getElementById('pron').innerHTML;    
    document.getElementById('Startnoun3').style.display= "inline-block";
    document.getElementById('pron').innerHTML = o + '<br><li style="font-family:Calibri,sans-serif;font-size: 13.33px;"> Use each of these words to make sentences, once in the nominative case and then in the accusative case.<tab class="tab"></tab>  [<tab id="NoForNoun3">8</tab> x 1] <br> <ol style="padding-left: 3%;" id="setnoun3"></ol></li>';
    document.getElementById('chgN3').innerText = 'not ok';
}
    if(a === "not ok"){
        var o = document.getElementById('pron').innerHTML;
        document.getElementById('Noofnoun3').value ='';
        var str = o;
        str = str.replace('<br><li style="font-family:Calibri,sans-serif;font-size: 13.33px;"> Use each of these words to make sentences, once in the nominative case and then in the accusative case.<tab class="tab"></tab>  [<tab id="NoForNoun3">8</tab> x 1] <br> <ol style="padding-left: 3%;" id="setnoun3"></ol></li>','');
        document.getElementById('pron').innerHTML = str;
        document.getElementById('Startnoun3').style.display= "none";
        document.getElementById('chgN3').innerText = 'OK';}
}


function savepro(){
    document.getElementById('NOUN').style.display = "none";
    document.getElementById('editn').style.display = "block";
    document.getElementById('svgn').style.display = "block";
    document.getElementById('chgN').innerText = 'OK';


}
function viewn(){
    document.getElementById('NOUN').style.display = "flex";
    document.getElementById('chgN').innerText = 'not ok';
    document.getElementById('editn').style.display = "none";
    document.getElementById('svgn').style.display =  "none";


}

