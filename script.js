const btn = document.querySelector("button");
const box = document.querySelector(".box");
let url = "https://catfact.ninja/fact";

btn.addEventListener("click", async()=>{
   let facts =  await getRandomJoke();    
   box.innerText = facts;
})

async function getRandomJoke(){
   try{
    let facts = await axios.get(url);
    return facts.data.fact;
    
   }
   catch(err){
    console.log("ERROR :" ,err);
   }    

}


