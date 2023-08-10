let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.keys');

let string = "";

for (let i = 0; i < buttons.length; i++) 
{
    buttons[i].addEventListener("click", (e) => handleButtonInput(e.target.innerHTML));
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') 
    {
        e.preventDefault();
        handleButtonInput('=');
    } 
    else 
    {
        handleKeyboardInput(e.key);
    }
});

function handleButtonInput(value) 
{
    if (value === '=') 
    {
        try 
        {
            string = eval(string);
            input.value = string;
        } 
        catch (error) 
        {
            input.value = 'Error';
        }
    } 
    else if (value === 'AC') 
    {
        string = "";
        input.value = string;
    } 
    else if(value === 'DEL') 
    {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } 
    else 
    {
        string += value;
        input.value = string;
    }
}

function handleKeyboardInput(key) 
{
    if (/^[0-9+\-*/.=]$/.test(key))
    {
        handleButtonInput(key);
    }
}



