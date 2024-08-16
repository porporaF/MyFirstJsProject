let count =0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}
function checkCountValue(){
    if(count==10){
        alert("Post gained 1o likes");
        else if (count==20){
            alert("Post gained 20 likes");
        }
    }
}