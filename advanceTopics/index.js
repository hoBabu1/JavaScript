const obj  = {}
// object creation 
const xhr = new XMLHttpRequest();
// open 
const profileUrl = "https://api.github.com/users/sandhya144"
xhr.open("GET",profileUrl);
xhr.send();
xhr.onreadystatechange = function (){
    if(xhr.readyState == 4 )
        {
            const data = JSON.parse(this.responseText)
            obj.avatar_url = data.avatar_url;
            obj.name = data.login
            obj.follower = data.followers;
        }
}
// select followers 
function setFollowers()
{   
    document.querySelector("#followers").innerHTML = obj.follower ;
}
function setName(){

    document.querySelector("#name").innerHTML = obj.name ;
}
function setImage(){
    document.querySelector("#ProfilePhoto").src = obj.avatar_url;
    
}
document.querySelector("#button").addEventListener("click",(e)=>{
    setName();
    setFollowers();
    setImage();
})
