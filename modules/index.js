const array =[ 34, 29]




function sorted(arr){
const uniquieArr = Array.from(new Set(arr))
console.log(uniquieArr);
 uniquieArr.sort((a,b)=>{
    return b-a
    
})
if(uniquieArr.length>=2){
    return uniquieArr[1];
}
else{
    return -1
}
console.log(uniquieArr)


}
console.log(sorted(array)) 