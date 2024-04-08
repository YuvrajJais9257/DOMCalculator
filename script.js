const result=document.getElementById('result');
function getInput(){
    const inputStr=document.getElementById('input').value;
    const operatorRegex= /[+\-*/%]/;
    const operators=inputStr.match(operatorRegex);
    const choice=operators?operators[0]:null;
    const inputs=inputStr.split(operatorRegex).map(input=>Number(input));
    return [...inputs, choice];
}
function Calculate(){
    const arr=getInput();
    const choice=arr[2];
    const a=Number(arr[0]);
    const b=Number(arr[1])
    switch(choice){
        case '+':
            result.innerHTML= a+b;
            break;
        case '-':
            result.innerHTML= Math.abs(a-b);
            break;
        case '*':
            result.innerHTML=  a*b;
            break;
        case '/':
            result.innerHTML= (b==0)? 'ERROR':a/b;
            break;
        case '%':
            result.innerHTML=a%b;
            break;
        default:
            result.innerHTML= 'INVALID CHOICE!';
            break;
    }

}
