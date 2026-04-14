const myInput = document.getElementById('myInput');
const myButton = document.getElementById('myButton');

const anotherInput = document.getElementById('anotherInput');
const anotherButton = document.getElementById('anotherButton');
let response_survey = document.getElementById('response');
let button = document.getElementById('people-responses');


async function sendData() {
    let inputValue = myInput.value;
    let response = await fetch('https://user-cervey-j8e0sudjr-jose-ochoas-projects-391a85d0.vercel.app/survey', {
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
s
myButton.addEventListener('click', sendData);