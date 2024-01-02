const btnE1=document.getElementById('btn')
const jokeE1=document.getElementById('joke')

const apiKey='QM9fGWKNGus3dZQrS63nZQ==PvuAPIaviPYGna2i';
const option={
    method:'GET',
   headers:{ 'X-API-KEY': apiKey,},
};

const apiURL='https://api.api-ninjas.com/v1/dadjokes?limit=1';


async function getJoke(){
    try {
        jokeE1.innerText='Updating.......'
        btnE1.disabled;
        btnE1.innerHTML='Loading'
        const  response= await fetch(apiURL, option);
        const data=await response.json();
        btnE1.enabled;
        btnE1.innerText='Tell me a joke'
        jokeE1.innerText=data[0].joke;
        
    } catch (error) {
        jokeE1.innerText='An error happened try again later.'
        console.log(error);
    }
  
}
btnE1.addEventListener("click", getJoke);