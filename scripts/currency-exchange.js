var height = prompt("Введите ваш рост в метрах");
var weight = prompt("Введите ваш вес в килограммах");

var bodyWeightIndex = weight/(height*height);
var doYouHaveExcessWeight = bodyWeightIndex > 28;

alert("У вас лишний вес: " + doYouHaveExcessWeight);
