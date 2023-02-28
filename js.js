function getRandomNumber (size){
    return Math.floor(Math.random() * size);
};
var wight = 400;
var height = 400;
var target = {
    x: getRandomNumber(wight),
    y: getRandomNumber(height)
};
var clicks = 0;
var clicksLimit = 30;

function getDistance(event, target){
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}
function getDistanceHint (distance){
if (distance < 10){
    return "get burned!";
}else if (distance < 20){
    return "very hot!";
}else if (distance < 40){
return "hot!";
}else if (distance < 80){
    return "warm";
}else if (distance < 160){
    return "cold";
}else if (distance < 320){
    return "very cold";
}else{
    return "you will freeze";
}
};

$("#map").click(function(event){
    clicks++;
if (clicks > clicksLimit){
    alert("Game over!");
    return;
}
    var distance = getDistance(event, target);
var distanceHint = getDistanceHint(distance);
//alert(distanceHint);//or 
$("#distance").text(distanceHint);
if (distance < 8){
    alert("The treasure found! Clicks made " + clicks);
}
});