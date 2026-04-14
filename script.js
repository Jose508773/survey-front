const BASE_URL = 'https://user-cervey.vercel.app';

const myInput = document.getElementById('myInput');
const myButton = document.getElementById('myButton');

const anotherInput = document.getElementById('anotherInput');
const anotherButton = document.getElementById('anotherButton');
let response_survey = document.getElementById('response');
let button = document.getElementById('people-responses');
let pResponse = document.getElementById('show-choice-arr');

async function sendData() {
    let inputValue = myInput.value;
    const response = await fetch(`${BASE_URL}/survey`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ favoriteColor: inputValue })
    });

    let data = await response.json();
    
    // Now use the parsed data to update the UI
    response_survey.textContent = `Response sent! Total so far: ${data.total_responses}`


}

myButton.addEventListener('click', sendData);

async function fetchData() {                                                                                                            
      try {                                                                                                                               
          const response = await fetch(`${BASE_URL}/responses`);                                                                        
          const data = await response.json();                                                                                             

          if (data.users != null) {                                                                                                       
              const colors = data.users.map(u => u.favoriteColor).join(', ');
              pResponse.textContent = `Choices: ${colors}`;                                                                               
              response_survey.textContent = `Total responses: ${data.users.length}`;                                                    
          } else {                                                                                                                        
              response_survey.textContent = 'Unexpected response format';
          }                                                                                                                               
      } catch (error) {                                                                                                                 
          response_survey.textContent = 'Error fetching data';                                                                          
          console.error(error);                                                                                                           
      }
  }                    

button.addEventListener('click', fetchData);