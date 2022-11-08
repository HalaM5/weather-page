/* Global Variables */

// TODO: Add click event listener for button element with the id: generate  and callback function actio that will be occured when click on button
document.getElementById('generate').addEventListener('click', action);
// TODO: Declare action function when click event is occured
/*
function action(){
 const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
// TODO: My API key used for asking openweathermap information about weather
const apiKey = '&appid=884ed9e96c4d9e55590b94c8f722e853&units=metric';   
// TODO: Set variable for zip code of user in selected HTML element
    let zipCode = document.getElementById('zip').value;
// TODO: Set variable for value of How does user feel in selected HTML element
    let content = document.getElementById('feelings').value;
// TODO: Create a new date instance dynamically with JS
   /* --------------------------date---------------------------------------------------------------------------------*/
 //*   let d = new Date(); //beloww different methods and display of date from (1 to 4)
   //* let newDate =`${ d.toLocaleDateString()}`;//show date only with /   //3
    //let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear(); // date with dot //4
    /* ---------------------------------------------------------------------------------------------------------*/
// TODO: ReCall  async function with 3 parameters for making GET request to get Data from API
  //*  getWeather(baseUrl, zipCode, apiKey)
// TODO: Chaining promises after GET request by getWeather async function with .then() which allows us to make multiple dependent HTTP requests
//*document.getElementById('content').innerHTML = `feel: ${content}`;
//*document.getElementById('date').innerHTML =`Today: ${newDate }`;
//*} /**--------all above inside function action()---------------------------------------------------------------------------------------------- */


//*
//*function action(){
    //*const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
   // TODO: My API key used for asking openweathermap information about weather
   //*const apiKey = '&appid=884ed9e96c4d9e55590b94c8f722e853&units=metric';   
   // TODO: Set variable for zip code of user in selected HTML element
   //*    let zipCode = document.getElementById('zip').value;
   // TODO: Set variable for value of How does user feel in selected HTML element
    //*   let content = document.getElementById('feelings').value;
   // TODO: Create a new date instance dynamically with JS
      /* --------------------------date---------------------------------------------------------------------------------*/
    //*   let d = new Date(); //beloww different methods and display of date from (1 to 4)
    //*   let newDate =`${ d.toLocaleDateString()}`;//show date only with /   //3
       //let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear(); // date with dot //4
       /* ---------------------------------------------------------------------------------------------------------*/
   // TODO: ReCall  async function with 3 parameters for making GET request to get Data from API
     //*  getWeather(baseUrl, zipCode, apiKey)
      //* .then(setTimeout(function(){
       //* document.getElementById('content').innerHTML = `feel: ${content}`;
       //* document.getElementById('date').innerHTML =`Today: ${newDate }`;
      //* }),1000)
   // TODO: Chaining promises after GET request by getWeather async function with .then() which allows us to make multiple dependent HTTP requests
   
  //* } /**--------all above inside function action()---------------------------------------------------------------------------------------------- */

   function action(){
    // TODO: Creat variable for URL address which is used with api key to obtain data about weather by using zip code of city or country
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
    const degree = config.Degree; 
     
   // TODO: Set variable for zip code of user in selected HTML element
       let zipCode = document.getElementById('zip').value;
   // TODO: Set variable for value of How does user feel in selected HTML element
       let content = document.getElementById('feelings').value;
   // TODO: Create a new date instance dynamically with JS
      /* --------------------------date---------------------------------------------------------------------------------*/
       let d = new Date(); //beloww different methods and display of date from (1 to 4)
       let newDate =`${ d.toLocaleDateString()}`;//show date only with /   //3
       //let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear(); // date with dot //4
       /* ---------------------------------------------------------------------------------------------------------*/
   // TODO: ReCall  async function with 3 parameters for making GET request to get Data from API
       getWeather(baseUrl, zipCode, degree)
       .then(setTimeout(function(){
        document.getElementById('content').innerHTML = `feel: ${content}`;
        document.getElementById('date').innerHTML =`Today: ${newDate }`;
       }),1000)
   // TODO: Chaining promises after GET request by getWeather async function with .then() which allows us to make multiple dependent HTTP requests
   
   } /**--------all above inside function action()---------------------------------------------------------------------------------------------- */


   /** GET request to API*/
// Async function for GET request for API of openweathermap
/** declare async functiom in which fetch function to make GET request*/
const getWeather = async (baseUrl, zip, key)=>{
    const res = await fetch(baseUrl+zip+key);
    try {
  // TODO: try that if API responds
        const data = await res.json();
        console.log(data);
        console.log("from get");
 // Write updated data to DOM elements
        document.getElementById('temp').innerHTML = `Temperature: ${Math.round(data.main.temp)}degrees`;
        
        return data;
    }
  // TODO: catch error if there is error in try block and catch it
    catch (error) {
        console.log('error', error);
    }
}


