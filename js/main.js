//-----------------------------
// Triangle Area calculation
// ----------------------------

document.getElementById('btn-tri').addEventListener('click', function(){
    const triangleFirstInput = getInputElementById('tri-inp-1');
    const triangleSecondInput = getInputElementById('tri-inp-2');
    const triangleBase = document.getElementById('tri-base');
    const triangleHight = document.getElementById('tri-hight');
    const btnName = document.getElementById('btn-tri');
    
// set value in area
    const setValueInTriBase = setValue('tri-base', triangleFirstInput, 'triangleFirstInput');
    const setValueInTriHeight = setValue('tri-hight', triangleSecondInput, 'triangleSecondInput');

    // calculation area
    const triangleArea = 0.5 * triangleFirstInput * triangleSecondInput;

    // push name
    const element = document.getElementById('tri-title');
    const elementInner = element.innerText;
    const pushAreaCal = pushCalArea(elementInner, triangleArea);
})

// --------------------------------
//     Rectangle section
// --------------------------------


document.getElementById('rec-btn').addEventListener('click', function(){
    const rectangleFirstInput = getInputElementById('rec-inp-1');
    const rectangleSecondInput = getInputElementById('rec-inp-2');
    const rectangleBase = document.getElementById('rec-width');
    const rectangleHight = document.getElementById('rec-length');
    
// set value in area
    const setValueInRecWidth = setValue('rec-width', rectangleFirstInput);
    const setValueInRecLength = setValue('rec-length', rectangleSecondInput);

    // calculation area
    const rectangleArea = rectangleFirstInput * rectangleSecondInput;

    // push name
    const element = document.getElementById('rec-title');
    const elementInner = element.innerText;
    const pushAreaCal = pushCalArea(elementInner, rectangleArea);
})


// --------------------------------
//     Parallelogram section
// --------------------------------

document.getElementById('paral-btn').addEventListener('click', function(){
    console.log('This is a btn')
    const ParallelogramFirstInput = getInputElementById('paral-inp-1');
    const ParallelogramSecondInput = getInputElementById('paral-inp-2');
    const ParallelogramBase = document.getElementById('paral-base');
    const ParallelogramHeight = document.getElementById('paral-height');
    
// set value in area
    const setValueInParalBase = setValue('paral-base', ParallelogramFirstInput);
    const setValueInParalHeight = setValue('paral-height', ParallelogramSecondInput);

    // calculation area
    const ParallelogramArea = ParallelogramFirstInput * ParallelogramSecondInput;
    

    // push name
    const element = document.getElementById('paral-title');
    const elementInner = element.innerText;

    const pushAreaCal = pushCalArea(elementInner, ParallelogramArea);
})


// --------------------------------
//     Rhombus section
// --------------------------------

document.getElementById('rhom-btn').addEventListener('click', function(){

    const rhombusFirstInput = getInputElementById('rhom-inp-1');
    const rhombusSecondInput = getInputElementById('rhom-inp-2');
    const rhombusDiagonal1 = document.getElementById('rhom-diagonal-1');
    const rhombusDiagonal2 = document.getElementById('rhom-diagonal-2');
    
// set value in area
    const setValueInRomDiagonal1 = setValue('rhom-diagonal-1', rhombusFirstInput);
    const setValueInRomDiagonal2 = setValue('rhom-diagonal-2', rhombusSecondInput);

    // calculation area
    const rhombusArea = 0.5 * rhombusFirstInput * rhombusSecondInput;
    

    // push name
    const element = document.getElementById('rhom-title');
    const elementInner = element.innerText;

    const pushAreaCal = pushCalArea(elementInner, rhombusArea);
})


// --------------------------------
//     Pentagon section
// --------------------------------

document.getElementById('pan-btn').addEventListener('click', function(){

    const PentagonFirstInput = getInputElementById('pan-inp-1');
    const PentagonSecondInput = getInputElementById('pan-inp-2');
    const rhombusDiagonal1 = document.getElementById('pan-width');
    const rhombusDiagonal2 = document.getElementById('pan-height');
    
// set value in area
    const setValueInPanWidth = setValue('pan-width', PentagonFirstInput);
    const setValueInPanHeight = setValue('pan-height', PentagonSecondInput);

    // calculation area
    const PentagonArea = 0.5 * PentagonFirstInput * PentagonSecondInput;
    
    // push name
    const element = document.getElementById('pan-title');
    const elementInner = element.innerText;

    const pushAreaCal = pushCalArea(elementInner, PentagonArea);
})


// --------------------------------
//     Ellipse section
// --------------------------------

document.getElementById('ellip-btn').addEventListener('click', function(){

    const ellipseFirstInput = getInputElementById('ellip-inp-1');
    const ellipseSecondInput = getInputElementById('ellip-inp-2');
    const ellipseA = document.getElementById('ellip-a');
    const ellipseB = document.getElementById('ellip-b');
    
// set value in area
    const setValueInEllipA = setValue('ellip-a', ellipseFirstInput);
    const setValueInEllipB = setValue('ellip-b', ellipseSecondInput);

    // calculation area
    const ellipseArea = 3.14 * ellipseFirstInput * ellipseSecondInput;
    

    // push name
    const element = document.getElementById('ellip-title');
    const elementInner = element.innerText;

    const pushAreaCal = pushCalArea(elementInner, ellipseArea);
})

//-------------------------------
//  Background change randomly
//-------------------------------
setValue('triangle');
setValue('rectangle');
setValue('parallelogram');
setValue('rhombus');
setValue('pentagon');
setValue('ellipse');

