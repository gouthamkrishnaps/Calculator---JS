function display(num){
    result.value+=num
}
function solution(){
    try{
        result.value=eval(result.value)
    }
    catch{
        result.value='syntax-error'
        setTimeout(()=>(result.value=('')),1000)
    }
}
function clearAll(){
    result.value=''
}
function back(){
    result.value=result.value.slice(0,-1)
}
