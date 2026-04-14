const myInput = document.getElementById('myInput');
const myButton = document.getElementById('myButton');

const anotherInput = document.getElementById('anotherInput');
const anotherButton = document.getElementById('anotherButton');
let response_survey = document.getElementById('response');
let button = document.getElementById('people-responses');


async function sendData() {
    let inputValue = myInput.value;
    const response = await fetch('https://user-cervey-i3wd14tn8-jose-ochoas-projects-391a85d0.vercel.app/survey', {

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
        const response = await fetch('https://user-cervey-i3wd14tn8-jose-ochoas-projects-391a85d0.vercel.app/responses');

        const data = await response.json();

        if (data.total_responses != null) {
            response_survey.textContent = `Total responses: ${data.total_responses}`;
        } else if (data.message != null) {
            response_survey.textContent = `Message: ${data.message}`;
        } else {
            response_survey.textContent = 'Unexpected response format';
        }
    } catch (error) {
        response_survey.textContent = 'Error fetching data';
        console.error(error);
    }
}

button.addEventListener('click', fetchData);