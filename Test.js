function ChangeHead(){
if(document.getElementById('TestName').value.length = 0 || document.getElementById('TotalMarks').value.length === 0
    ){alert('Enter Test Name And Total Marks Properly')}else{
        let x = document.getElementById('TestName').value;
    let y = document.getElementById('TotalMarks').value;
    document.getElementById('Headchangediv').style.display="none";
    document.getElementById('ChangePartdiv').style.display="block";
    document.getElementById('test').innerText = x;
    document.getElementById('marks').innerText = "Marks: " + y;
    var o = document.getElementById('header').innerHTML;
    document.getElementById('header').innerHTML = o + "<ol id='pron'></ol>";
    }
}
function Export2pdf(){
        var printContents = document.getElementById('header').innerHTML
        document.body.innerHTML = "<html><head><style><link rel='stylesheet' href='style.css'></style><title></title></head><body>" + printContents + "</body></html>";
       setTimeout(pnt,1000);   
}
function pnt(){
    let a = window;
    a.print();
    setTimeout(bck,1000);
}
function bck(){
    var printContents = document.getElementById('bg').innerHTML;
    var x= '<div id="paper" style="display: block;"><div id="header" style="display: flex;">'+ printContents + '</div></div>'
    var y = '<span id="savebtn"><button id="download" onclick="Export2Word()" style="display: flex;">Download File<br>(As Doc. File)</button><button id="pdf" onclick="Export2pdf()" style="display: flex;">Print Now<br>(Save As PDF File)</button></span>'
    var z = '@media only screen and (max-width: 600px) {#Headchangediv{margin: 1%;top: 26%;height: 301px;width: 86%;left: 0%;border-radius: 83px;position: absolute;display: none;color: #000000;background-color: #38107257}#secone{padding: 10px;height: auto;font-size: 2vw;font-family: "poppins", sans-serif;margin: 0;text-align: center;width: 98%;color:#dbd1eb}#txtone{font-size: 30px;margin: 5%;}#txttwo{margin: 0;font-size: 28px;}#TestName{width: 98%;padding-left: 8px;background-color: #ffffff42;backdrop-filter: blur(7px);}#TotalMarks{width: 15vw;background-color: #ffffff6e;backdrop-filter: blur(7px);}#Headchange{width: 22vw;height: 10vw;font-size: 18px;background-color: #581ea2;color: antiquewhite;}#bg{background-size: 400%;background-image: url()/*(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWWu447oNAJu5VF5gQd03mSGWeZkn573QyyrqNc4Zgx0xVfrF9gKukbWyW3CmIe3hWrf-SWhTlVS493XbMVnJ9-dy8EAR2u_0ClkBh57rqRd8NARdLRw9mQ18ExxdjkEzbmx97LgJ6UpnGlDMOBZPSSjOu4SUo2ocuYKNMTxzd0PQDHM1sIms5lpGJbA/s16000/bg3.jpg)*/;}#TotalMarks{width: 15vw;}#paper{display:none;width: 88%; margin: 2px;overflow: scroll;}#savebtn{display: flex;flex-direction: column;align-items: center;justify-content: center;}#Startsentence1,#Startsentence2,#Startsentence3,#Startsentence4,#Startsentence5{display: none;color: #e5e1e1;background-color: #06406e69;padding: 10px;top: 20%;left: 14%;backdrop-filter: blur(4px);}#Noofpronoun{width: 55px;height: 35px;font-size: 25px;background-color: #ffffffba;backdrop-filter: blur(1px);}#saven{width: 100px;height: 480px;padding: 10px;margin-top: 32px;margin-left: 37%;font-size: 18px;}#save{width: 3.12vw;}#selection{height: 58px;padding: 0px;width: 98%;font-size: 18px;box-shadow: 8px 4px 10px #3a3a3acc;background-color: #f1e9ff;justify-content: space-around}  #Startsentence2{top: 4%;}#Startsentence2{top: 20%;}#Startsentence3{top: 37%}'
    var m = '#Startsentence4{top: 54%;}#Startsentence4{top: 71%;}#Pronoun{width: 64px;}#editp{margin-left: 20vw;}#svgp{display: none;width: 18px;padding-top: 4px;right: 21vw;position: absolute;}#editn{margin-left: 21vw;}#svgn{display: none;width: 18px;padding-top: 6px;right: 21vw;position: absolute;}#PP,#NP{margin-left: 0px;}#ol{display: none;top: 40vw;height: 327px;overflow: scroll;    font-size: 18px;}#NOUN{top: 17vw; font-size: 18px;height: 400px;overflow: scroll;}#noun{ height: 35px;width: 40px;margin: 0;padding: 0;}#n2{width: 300px;}#n3{width: 300px;}#savepro{align-items: center;display: flex;justify-content: center;height: 45px;width: 100px;padding: 10px;margin-left: 100px;font-size: 18px;}#paper{background-color: #0668bd5e}#header{    display: flex;transform: scale(1);overflow: scroll;width: 90%; margin: 10px; padding: 10px;height: auto; max-height: 500px;}#pdf{margin: 10px 0;height: 50px;width: 190px;font-size: 15px;}#download{margin: 10px 0;height: 50px;width: 190px;font-size: 15px;}#head2{margin-left: 30%;padding: 10px; height: 58px;width: 158px;background-color: #0094e9;box-shadow: 11px 4px 10px #000000cf;color: #e9fbff; border: 0;border-radius: 21vw;font-size: 19px;}.ldio-n8zqosl3re div{width: 13px;height: 48px;}#preload{top: 40vh;left: 28%;}'
    
    document.body.innerHTML = "<html><head><link rel='stylesheet' href='style.css'><style>" + " "+ z + m +"</style><title></title></head><body>" + x + y + "</body></html>"
    document.getElementById('download').style.display = 'flex';
document.getElementById('pdf').style.display = 'flex';
document.getElementById('paper').style.display = 'block';
}
//pre load func ---->

setTimeout(back,2500);
function back(){
    document.body.style.backgroundImage = "url('bgm.jpg')";
    document.getElementById('preload').style.display = 'none';
    document.getElementById('Headchangediv').style.display = 'flex'
}
/*window.onload = function() {
    document.getElementById('preload').style.display = 'none';
    document.getElementById('Headchangediv').style.display = 'flex'
};*/
function Export2Word(element, filename = ''){
    var preHtml = "<!DOCTYPE html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title></title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml+document.getElementById('header').innerHTML+postHtml;

    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });  
    // Specify link url
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);  
    // Specify file name
    filename = filename?filename+'.doc':'Question.doc';   
    // Create download link element
    var downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);   
    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        downloadLink.href = url;     
        downloadLink.download = filename;      
        downloadLink.click();
    }  
}

function StartPronoun(){
    var a = document.getElementById('chg').innerText;
    if(a === "OK"){
    document.getElementById('ol').style.display = "flex";
    document.getElementById('chg').innerText = 'not ok';
    }if(a === "not ok"){
    document.getElementById('ol').style.display = "none";
    document.getElementById('chg').innerText = 'OK';
    console.log(document.getElementById('pron').innerHTML);
}
}
function viewp(){
    document.getElementById('ol').style.display = "flex";
    document.getElementById('Pronoun').style.display = "none";
    document.getElementById('chg').innerText = 'not ok';
    document.getElementById('editp').style.display = "none";
    document.getElementById('svgp').style.display =  "none";

}
function saven(){
    document.getElementById('ol').style.display = "none";
    document.getElementById('Pronoun').style.display = "block";
    document.getElementById('chg').innerText = 'OK';
    document.getElementById('editp').style.display = "block";
    document.getElementById('svgp').style.display =  "block";

}


function Startsentence1(){
    var a = document.getElementById('chgs1').innerText;
    if(a === "OK"){
    var o = document.getElementById('pron').innerHTML;    
    document.getElementById('Startsentence1').style.display= "inline-block";
    document.getElementById('pron').innerHTML = o + "<br><li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Choose the correct pronoun to complete each sentence. <tab class='tab'></tab>  [<tab id='NoForPronoun'>8</tab> x 1] <br> <ol style='padding-left: 3%;' id='setpronoun'></ol></li>";
    document.getElementById('chgs1').innerText = 'not ok';
}
    if(a === "not ok"){
        var o = document.getElementById('pron').innerHTML;
        document.getElementById('Noofpronoun').value ='';
        var str = o;
        var str = str.replace('<br><li style="font-family:Calibri,sans-serif;font-size: 13.33px;"> Choose the correct pronoun to complete each sentence. <tab class="tab"></tab>  [<tab id="NoForPronoun">8</tab> x 1] <br> <ol style="padding-left: 3%;" id="setpronoun"></ol></li>','');
        document.getElementById('pron').innerHTML = str;
        document.getElementById('Startsentence1').style.display= "none";
        document.getElementById('chgs1').innerText = 'OK';}
}
function Startsentence2(){
    var a = document.getElementById('chgs2').innerText;
    if(a === "OK"){
        var o = document.getElementById('pron').innerHTML;    
        document.getElementById('Startsentence2').style.display= "inline-block";
        document.getElementById('pron').innerHTML = o + "<br><li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Identify the pronouns and tell their kind <tab class='tab'></tab>  [<tab id='IdentifyNoPronoun'>8</tab> x 1] <br> <ol style='padding-left: 3%;' id='Identifysecpronoun'></ol></li>";    
        document.getElementById('chgs2').innerText = 'not ok';}
    if(a === "not ok"){
        var o = document.getElementById('pron').innerHTML;
        document.getElementById('Identifypronoun').value ='';
        var str = o;
        str = str.replace('<br><li style="font-family:Calibri,sans-serif;font-size: 13.33px;"> Identify the pronouns and tell their kind <tab class="tab"></tab>  [<tab id="IdentifyNoPronoun">8</tab> x 1] <br> <ol style="padding-left: 3%;" id="Identifysecpronoun"></ol></li>','');
        console.log(str);
        document.getElementById('pron').innerHTML = str;
        document.getElementById('Startsentence2').style.display= "none";
        document.getElementById('chgs2').innerText = 'OK';}
}
function Startsentence3(){
    var a = document.getElementById('chgs3').innerText;
    if(a === "OK"){
        var o = document.getElementById('pron').innerHTML;    
        document.getElementById('Startsentence3').style.display= "inline-block";
        document.getElementById('pron').innerHTML = o + "<br><li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>Identify if the highlighted pronouns are reflexive pronouns (R) or emphatic pronouns (E)<tab class='tab'></tab>  [<tab id='IdentifyNoPronoun1'>8</tab> x 1] <br> <ol style='padding-left: 3%;' id='Identifysecpronoun1'></ol></li>";    
        document.getElementById('chgs3').innerText = 'not ok';}
    if(a === "not ok"){
        var o = document.getElementById('pron').innerHTML;
        document.getElementById('Identifypronoun1').value ='';
        var str = o;
        str = str.replace('<br><li style="font-family:Calibri,sans-serif;font-size: 13.33px;">Identify if the highlighted pronouns are reflexive pronouns (R) or emphatic pronouns (E)<tab class="tab"></tab>  [<tab id="IdentifyNoPronoun1">8</tab> x 1] <br> <ol style="padding-left: 3%;" id="Identifysecpronoun1"></ol></li>','');
        console.log(str);
        document.getElementById('pron').innerHTML = str;
        document.getElementById('Startsentence3').style.display= "none";
        document.getElementById('chgs3').innerText = 'OK';}
}
function Startsentence4(){
    var a = document.getElementById('chgs4').innerText;
    if(a === "OK"){
        var o = document.getElementById('pron').innerHTML;    
        document.getElementById('Startsentence4').style.display= "inline-block";
        document.getElementById('pron').innerHTML = o + "<br><li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>Change these statements into questions using interrogative pronouns.<tab class='tab'></tab>  [<tab id='IdentifyNoPronoun2'>8</tab> x 1] <br> <ol style='padding-left: 3%;' id='Identifysecpronoun2'></ol></li>";    
        document.getElementById('chgs4').innerText = 'not ok';}
    if(a === "not ok"){
        var o = document.getElementById('pron').innerHTML;
        document.getElementById('Identifypronoun2').value ='';
        var str = o;
        str = str.replace('<br><li style="font-family:Calibri,sans-serif;font-size: 13.33px;">Change these statements into questions using interrogative pronouns.<tab class="tab"></tab>  [<tab id="IdentifyNoPronoun2">8</tab> x 1] <br> <ol style="padding-left: 3%;" id="Identifysecpronoun2"></ol></li>','');
        console.log(str);
        document.getElementById('pron').innerHTML = str;
        document.getElementById('Startsentence4').style.display= "none";
        document.getElementById('chgs4').innerText = 'OK';}
}
function Startsentence5(){
    var a = document.getElementById('chgs5').innerText;
    if(a === "OK"){
        var o = document.getElementById('pron').innerHTML;    
        document.getElementById('Startsentence5').style.display= "inline-block";
        document.getElementById('pron').innerHTML = o + "<br><li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>Correct the errors in the use of pronouns.   <tab class='tab'></tab>  [<tab id='IdentifyNoPronoun3'>8</tab> x 1] <br> <ol style='padding-left: 3%;' id='Identifysecpronoun3'></ol></li>";    
        document.getElementById('chgs5').innerText = 'not ok';}
    if(a === "not ok"){
        var o = document.getElementById('pron').innerHTML;
        document.getElementById('Identifypronoun3').value ='';
        var str = o;
        str = str.replace('<br><li style="font-family:Calibri,sans-serif;font-size: 13.33px;">Correct the errors in the use of pronouns.   <tab class="tab"></tab>  [<tab id="IdentifyNoPronoun3">8</tab> x 1] <br> <ol style="padding-left: 3%;" id="Identifysecpronoun3"></ol></li>','');
        console.log(str);
        document.getElementById('pron').innerHTML = str;
        document.getElementById('Startsentence5').style.display= "none";
        document.getElementById('chgs5').innerText = 'OK';}
}

const fruits = ["i)  Sam and I went to the mall. ____________ had lunch at the new restaurant.   <br><tab class='tab'> a. They  	 <tab class='tab'>	 b. We  	<tab class='tab'> 	 c. Me   <br>", 
"ii)  When the beautiful princess stepped out of the lovely carriage, all the people were  <br>looking at __________.   <br><tab class='tab'>a. he  	<tab class='tab'> 	 b. him  	 <tab class='tab'>	 c. her   <br>", 
"iii)  He fell and hurt __________.   <br><tab class='tab'>a. herself  <tab class='tab'>	 b. himself  <tab class='tab'>	 	 c. themselves   <br>", 
"iv)  Tarun and I are going to the fair. Do you want to come with __________?   <br><tab class='tab'>a. them  	 <tab class='tab'>	 b. him  	<tab class='tab'> 	 c. us   <br>",
"v)  I love my sister. She is very kind to __________.   <br> <tab class='tab'>a. us  	<tab class='tab'> 	 b. me  	<tab class='tab'> 	 c. I   <br>",
"vi)  I have lost my keys. Has __________ seen them?   <br><tab class='tab'>a. everyone  	 b. anyone  <tab class='tab'>	 	 c. myself <br>",
"vii)  Priyansh, would __________ like to have some tea?   <br>a. you  	<tab class='tab'> 	 b. they  	 <tab class='tab'>	 c. we  <tab class='tab'> <br>",
"viii)  Pluck the ripe strawberries. We will make jam out of __________.  <br><tab class='tab'>a. they  	<tab class='tab'> 	 b. theirs    <tab class='tab'>   c. them "];
function ChangePart(){
    console.log('done');
    document.getElementById('download').style.display = 'flex';
    document.getElementById('pdf').style.display = 'flex';
    document.getElementById('paper').style.display = 'block';
    document.getElementById('bg').style.backdropFilter = 'blur(${9}px)';
    console.log(document.getElementById('pron').innerHTML);
    var q =  document.getElementById('Noofpronoun').value;
    var q1 =  document.getElementById('Identifypronoun').value;
    var q2 =  document.getElementById('Identifypronoun1').value;
    var q3 =  document.getElementById('Identifypronoun2').value;
    var q4 =  document.getElementById('Identifypronoun3').value;
    var q5 =  document.getElementById('Noofnoun').value;
    var q6 =  document.getElementById('Noofnoun2').value;
    var q7 =  document.getElementById('Noofnoun3').value;
      if (q <9){
      for (let i = 0; i < q; i++) {
      var pro = fruits[i];
      console.log(pro);
      var o = document.getElementById('setpronoun').innerHTML;
      document.getElementById('setpronoun').innerHTML = o + pro;
      document.getElementById('NoForPronoun').innerText = q;
      } 
      
    }if (q >=9){alert("Total Have 8 questions")}
    //if (q <= 0){alert("Dont choose below 1 question ")}
    //2nd pronoun --->
    if (q1 <17){
        for (let i = 0; i < q1; i++) {
        var ide = Identify[i];
        var o1 = document.getElementById('Identifysecpronoun').innerHTML;
        document.getElementById('Identifysecpronoun').innerHTML = o1 + ide;
        document.getElementById('IdentifyNoPronoun').innerText = q1;
        } 
      }if (q1 >=17){alert("Total Have 16 questions")}
      ////3rd pronoun --->
      if (q2 <26){
        for (let i = 0; i < q2; i++) {
        var ide1 = Identify2[i];
        var o2 = document.getElementById('Identifysecpronoun1').innerHTML;
        document.getElementById('Identifysecpronoun1').innerHTML = o2 + ide1;
        document.getElementById('IdentifyNoPronoun1').innerText = q2;
        } 
      }
      if (q2 >=26){alert("Total Have 25 questions")}
      ////4th pronoun --->
      if (q3 <16){
        for (let i = 0; i < q3; i++) {
        var ide2 = Identify3[i];
        var o3 = document.getElementById('Identifysecpronoun2').innerHTML;
        document.getElementById('Identifysecpronoun2').innerHTML = o3 + ide2;
        document.getElementById('IdentifyNoPronoun2').innerText = q3;
        } 
      }
      if (q3 >=16){alert("Total Have 15 questions")}
     ////5th pronoun --->
     if (q4 <11){
        for (let i = 0; i < q4; i++) {
        var ide3 = Identify4[i];
        var o4 = document.getElementById('Identifysecpronoun3').innerHTML;
        document.getElementById('Identifysecpronoun3').innerHTML = o4 + ide3;
        document.getElementById('IdentifyNoPronoun3').innerText = q4;
        } 
      }
      if (q4 >=11){alert("Total Have 10 questions")}
/// for noun --->
if (q5 <9){
    for (let i = 0; i < q5; i++) {
    var ide4 = Noun[i];
    var o5 = document.getElementById('setnoun').innerHTML;
    document.getElementById('setnoun').innerHTML =  o5 + ide4;
    document.getElementById('NoForNoun').innerText = q5;
    } 
  }
  if (q5 >=9){alert("Total Have 8 questions")}

/// for noun2 --->
if (q6 <21){
    for (let i = 0; i < q6; i++) {
    var ide5 = Noun[i];
    var o6 = document.getElementById('setnoun2').innerHTML;
    document.getElementById('setnoun2').innerHTML =  o6 + ide5;
    document.getElementById('NoForNoun2').innerText = q6;
    } 
  }
  if (q6 >=21){alert("Total Have 20 questions")}
/// for noun2 end--->
/// for noun3 --->
if (q7 <7){
    for (let i = 0; i < q7; i++) {
    var ide6 = Noun[i];
    var o7 = document.getElementById('setnoun3').innerHTML;
    document.getElementById('setnoun3').innerHTML =  o7 + ide6;
    document.getElementById('NoForNoun3').innerText = q7;
    } 
  }
  if (q7 >=7){alert("Total Have 6 questions")}
/// for noun3 end--->
      document.getElementById('header').style.display = "flex";
      document.getElementById('Headchangediv').style.display = "none";
      document.getElementById('ChangePartdiv').style.display = "none";
}

const Noun = [

    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  ______________ played with a ______________ . </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  The ______________ said, 'I respect your ______________ .  </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  ______________ baked a delicious ______________ yesterday.     </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  When ______________ lost the , ______________ she was in great ______________ .    </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  The pink ______________ has many ______________ .     </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  ______________ asked his elder ______________ to help him find his ______________ .     </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  The ______________ was so boring that the ______________ fell asleep  </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  I saw ______________ of geese flying above my ______________ .    </li>"
    

]

const Identify = [

   "<li value='1' style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Indira does not like him.  	 	 	 	 	_______________ </li>",  
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Can you see those?  	 	 	 	 	_______________ </li>",  
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Who said that?  	 	 	 	 	 	_______________ </li>",  
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> The two kittens love each other.  	 	 	 	_______________ </li> ", 
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> I am teaching myself to play the tabla.  	 	 	_______________  </li>", 
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> They have arrived from London.  	 	 	 	_______________ </li>",  
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Whom did you meet at the mall?  	 	 	 	_______________  </li>", 
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> That is beautiful.  	 	 	 	 	 	_______________  </li>", 
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> They have lost everything in the earthquake.  	 	_______________  </li>", 
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> My garden is pretty. Yours is prettier.  	 	 	_______________  </li>", 
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> You should not blame yourself for the accident.  	_______________  </li>", 
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> They are talking to each other.  	 	 	 	_______________  </li>", 
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Can anyone fix the computer?  	 	 	 	_______________   </li>",
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> I completed the job myself.  	 	 	 	_______________   </li>",
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> All the essays were good, but his was the best.  	_______________  </li>", 
   "<li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> She herself spoke to the teacher.  	 	 	_______________  </li>"

]
const Identify2 = [

    " <li value='1' style='font-family:Calibri,sans-serif;font-size: 13.33px;'> She <b>herself</b> told me this.  	 	 	 	 	_______  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> I saw <b>myself</b> in the mirror.  	 	 	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> We will do it <b>ourselves</b>.  	 	 	 	 	_______   </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> I did my homework <b>myself</b>.  	 	 	 	 	_______  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> The President <b>himself</b> distributed the awards.  	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> She <b>herself</b> spoke to me.  	 	 	 	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Arjun cut <b>himself</b> while chopping vegetables.  	 	_______  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> They blamed <b>themselves</b> for the crash.  	 	 	_______  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> We <b>ourselves</b> witnessed the accident.  	 	 	_______  </li> ",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> He <b>himself</b> invited us to the party.  	 	 	 	_______  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> We enjoyed <b>ourselves</b> at the party.  	 	 	_______  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> They realised <b>themselves</b> that they were wrong.  	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Don't deceive <b>yourself</b>.  	 	 	 	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> I said to <b>myself</b> that he was right.  	 	 	 	_______  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> She expressed <b>herself</b> well.  	 	 	 	 	_______  </li> ",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> I looked through the papers <b>myself</b>.  	 	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> The child cannot wash <b>itself</b>.  	 	 	 	_______  </li> ",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> You <b>yourself</b> find it hard to say what you feel.  	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> She <b>herself</b> saved her daughter.  	 	 	 	_______  </li> ",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Learn to love <b>yourself</b>.  	 	 	 	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> They have exerted <b>themselves</b> too much.  	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> We have already put <b>ourselves</b> into a lot of problems.  	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Have faith in <b>yourself</b>.  	 	 	 	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Prateek <b>himself</b> was not aware of the plan.  	 	_______   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'> Don’t use that knife. You will hurt <b>yourself<b>.  	 	_______ </li>",

]
const Identify3 = [

    " <li value='1' style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  She greeted the guests with a smile.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  The government is going to call for a total ban on liquor.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  The skaters are gliding over the ice.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  They sent some flowers to me.  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  These questions are to be answered.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  They don’t want to leave their house.  </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  I will take the first bus.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  You can keep the book for a week.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  The duck was trapped in the weeds.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  Tara Singh saved the child from drowning.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  I plan to take the early morning flight.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  The tailor sent the stitched clothes last evening.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  Ragini gave the cheque to Mayank.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  He bought the house with the red roof.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  Birds love to build their nests in this tree. </li>",

]
const Identify4 = [

    " <li value='1' style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  I himself made the pie.   </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  He called mine yesterday.      </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  These clothes are us.      </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  I was at home all day. Anybody came.     </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  Everything loves Pia.     </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  We send each another Christmas cards.     </li>", 
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  His mother just retired. Hers was a teacher.     </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  I am late. She would be waiting for mine.     </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  I saw Seema and Prateek at the mall. But them did not see mine  </li>",
    " <li style='font-family:Calibri,sans-serif;font-size: 13.33px;'>  Hello, I am Rudra and this is my sister, Priya. Us live in Kailash Colony.   </li>",

]
