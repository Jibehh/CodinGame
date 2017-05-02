/*
On initialise la valeur maximale à la première valeur
1 - POUR CHAQUE valeur
    difference = valeur actuelle - valeur max
    2 - SI la difference calculée est plus petite que la solution actuelle
        La solution devient la difference calculée
    FIN SI
    3 - SI la valeur actuelle est supérieure à la valeur maximale
        La valeur actuelle devient la valeur maximale
        FIN SI
    FIN POUR CHAQUE
*/    

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline());
var inputs = readline().split(' ');

//On crée un tableau qui va contenir les différentes valeurs
var values = [];

//On stocke les valeurs de v dans un tableau
for (var i = 0; i < n; i++) {
    var v = parseInt(inputs[i]);
    values.push(v);
}

var p = 0;
var maxValue = values[0];

// 1 
for(var j = 0; j < values.length; j++){

    var difference = values[j] - maxValue;
    
    // 2 
    if(difference < p){
        p = difference;    
    }
    
    // 3 
    if(values[j] > maxValue){
        maxValue = values[j];
    }
        
}
// Write an action using print()
// To debug: printErr('Debug messages...');
print(p);