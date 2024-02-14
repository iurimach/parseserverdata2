


// აქ ვიწყებ  დატას წამოღებას
async function fetchData(url) {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.text(); // or response.json() if the content is JSON
  
      if (data.includes("id")) { //აქ ვწერ სიტყვას რისი მოძებნაც მინდა
        
        return data; // თუ შეცავს საძიებო ისტყვას დაბუნე დატა.
      } else {
        return ""; //თუ არ შეცავს საძიებო სიტყვას აბრნებს ცარიელ სტრინგს
      }
    } catch (error) {
      console.error("fetch წამოღების პრობლემაა", error);
      throw error; 
    }
  }
  
  // Usage example:
  const url = " https://jsonplaceholder.typicode.com/todos/1"; // ამ მისმაართიდან მომაქ
  let result = ""; // ეს ტავიდან ცარილეია თუ საძიებო სიტყვას შეიცავს წამოღებული დატა ივსება რესატი
  
  (async () => {
    try {
      result = await fetchData(url);
      var message1=document.getElementById("message")
        message1.textContent=result  // რესალტი თუ შეივსება შეივსება ჰტმლში p ტეგიც
        
      console.log("Result:", result);
      if(result.length>0){ // თუ მოძებნილი ინფორმცია 0 ზე მეტია მხოლოდ მაშინ გააგზავნე მეილი
         //SendMail();    // ამ კომენტრს ჩახსნი და დაიწყებს გაგზავნას ავტომატრად------------------------------------------
        }
    } catch (error) {
      console.error("Error:", error);
    }
  })();
// სასურველი დატას წამოღება აქ დავამთავრე .

//   es funqcia agzavnis zeda kodidan მიღებულ შედეგს emailjsze
// emailjs ზე ხოლო ემაილ ჯსი ნებისმიერ მეილზე რასაც ექაუნთში გაუწერ 




var message1=document.getElementById("message")
message1.textContent=result //ამას ვწერ მეორედ რადგან ზედა დაწერილს თუ წაშლი  რესულტი იშლება,ამას თუ წაშლი ტაიპერორია 

function SendMail(){
  
    var params={
        
        message:message1.textContent
    }
    // აქ ემილის პარმეტრბი წერია , email.js მა რაც მომანიჭა იდ 
    emailjs.send("service-matchara_18", "template_0843m4r",params).then(function(res){
        
  
    })
   

}
//აქ ვარეფლეშებ  ვებ გვერდს შემდეგი ლოგიკით, თუ შედეგი გვაქ, მაშინ რეფლეში დაიგვიანე დიდი ხნით-ბევრი სმს რო არ გზავნოს, ვიპოვე ვიპოვეო
// როცა რეზლტი აქვს შედის პირველ if ში - აგზვნის სმს, და ისვნებს რეფლში დიდი ხნით, რას გაუწერ
// თუ რესალტი არ გვაქ, ვერ ვიპოვე შედეგი მაშინ რეფლეში სწრაფად გააკეთე საიტის, სანმ არ იპოვი,სანმ სერვზე არ დაიდება


async function reloadproject(){ // ასინქ დაელოდოს, რესულტის განლიზებას,
  result = await fetchData(url);  //ამის პასუხს უცდის ფუნქცია
  
  if(result.length>0){              // თუ იპოვა შედეგი რასც ვეძებ გაეშვბა ეს ტანი
    var refreshInterval = 20 * 60 * 60 * 1000;  //= 20 hours , შეცვლე თუ სწრფი რეფლში გინდა
    setInterval(refreshPage, refreshInterval);
            
    function refreshPage() { // ეს აეკეთებს რეფლეშს, 
      location.reload();  // ამ ლოკაცის ჩატვირთვას აკეთებს თუმცა ინტერვლის  ეს ფუნქცია იღებს ზემოდან
     
    }
    console.log("ipova daa da gazarda reflshis dro")

  }
  else{
    var refreshInterval = 10 * 60 * 1000; // =10 min, თუ გინდა უფრო სწრფად დარეფლშდეს ეს პარმტრი შეცვლე
    setInterval(refreshPage, refreshInterval);
         
    function refreshPage() {
      location.reload();
      
    }
    console.log("ver ipova da swrafad darefleshda")
  }


}

reloadproject(); //აქ ვიძახებ გვერდის რეფლეშ ფუნქციას

