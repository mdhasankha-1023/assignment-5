// --------------------------------------------
//          All common function()
// --------------------------------------------

// common input function
function getInputElementById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const elementValue = parseFloat(elementValueString);

    element.value = '';
    return elementValue;
}

// set Value
function setValue(elementId, value){
    const element = document.getElementById(elementId);
    

    if(value > 0){
        element.innerText = value;
        
    }
    else{
        element.innerText = '0';
    }
    

}

// push All section in  Area calculation
function pushCalArea(name, value){
    const areaCalculation = document.getElementById('area-calculation');
    const newElement = document.createElement('p');
    const titleAndValue = name +'   '+ value;
    newElement.innerText = titleAndValue;

    if(value > 0){
        areaCalculation.appendChild(newElement);
    }
    else{
        alert('You do not type "string", "0" and "minus-number"')
    }
    
} 

// Make random Background Color function
function getElementById(elementId){
    
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    let bgColorChange = document.getElementById(elementId);
    bgColorChange.style.backgroundColor = "#" + randomColor;
        
}

// Set value in random Background color function
function setValue(value){
    document.getElementById(value).addEventListener('mouseover', function(){
        getElementById(value);
    })
}



