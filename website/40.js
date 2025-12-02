const display = document.querySelector('#display');
function clearOne(){
    const number = display.textContent;
    const noLength = number.length;
    let newName = number.slice(0, noLength-1);
    display.textContent = newName;
}
function clearEquation(){
    display.textContent = ''
}
function disAppend(number){
    if(display.textContent == 'error'){
        display.textContent = '';
        display.textContent = number;
    }else if(number == Math.E){
        display.textContent += '*'+number
    }else{
        display.textContent += number;
    }   
}
function equalEquation(){
    try{
        let total = display.textContent;
        if(total[0] == 'e'|| total[1] == 'e'){
            total = total[0].replace('e', Math.E) + total.slice(1);
            console.log('test1')
        }else if(total[1]== 'e'){
            total = total[0].replace('e', Math.E) + total.slice(1);
        }else if(total == 'Infinity'){
            throw new error
}    
    console.log(total);
    total = total.replaceAll('e', Math.E+'*');
    console.log(total);
    total = eval(total);
    display.textContent = total;

}
    catch(error){
        console.error('error')
        display.textContent = 'error'
    }
}

