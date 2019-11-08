export const calculator =(parent, args, ctx, info)=>{
    const {num1, num2, operation}  = args;
    let result = 0 
    console.log(operation);
    switch(operation){
        case 'add':
                result= num1 + num2
                console.log(result);
            break; 
        case 'sub':
                result= num1 - num2
            break;
        case 'multi':
                result= num1 * num2
            break; 
        case 'divide':
                result= num1 / num2
            break;
        default: 
            0; 

    }
    return result;
}