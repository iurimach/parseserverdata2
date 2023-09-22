

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
        // SendMail();  // ამ კომენტრს ჩახსნი და დაიწყებს გაგზავნას
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
        alert("seccess!" + res.status);
    })
   

}
//აქ ვარეფლეშებ  ვებ გვერდს ყოველ 15 წუთში რადგან სულ ახლ ახლი ინფორმცია წამოღოს ხოლმე
function refreshPage() {
    location.reload();
    console.log("darefleshda brat")
}

const refreshInterval = 1000*90; // თუ გინდა უფრო სწრფად დარეფლშდეს ეს პარმტრი შეცვლე
setInterval(refreshPage, refreshInterval);