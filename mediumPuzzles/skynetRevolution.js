 /*
1 - POUR CHAQUE gateway
    2 - SI il existe un lien entre cette gateway et l'agent Skynet
        On coupe ce lien
    FIN SI
    3 - SINON SI il existe un lien entre l'agent Skynet et cette gateway
        On coupe ce lien
    FIN SINON SI
    4 - SINON
        5 - POUR CHAQUE lien
            6 - SI ce lien contient la gateway étudiée
                On coupe ce lien
            FIN SI
        FIN POUR CHAQUE
    FIN SINON
FIN POUR CHAQUE
 */

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
var inputs = readline().split(' ');
var N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
var L = parseInt(inputs[1]); // the number of links
var E = parseInt(inputs[2]); // the number of exit gateways

//On définit un tableau qui va contenir les liens
var links = [] 

//On ajoute les liens au tableau
for (var i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    var N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    var N2 = parseInt(inputs[1]);
    links.push(N1+' '+N2); 
}

//On crée un tableau qui va contenir les passerelles
var gateways = [] 

//On ajoute les passerelles au tableau
for (var i = 0; i < E; i++) {
    var EI = parseInt(readline()); // the index of a gateway node
    gateways.push(EI);
}

// game loop
while (true) {
    var SI = parseInt(readline()); // The index of the node on which the Skynet agent is positioned this turn
    // Write an action using print()
    // To debug: printErr('Debug messages...');

    // 1 
    for(var i = 0; i < gateways.length; i++){
        printErr('Gateway = '+gateways[i]);
        
        // 2
        if(links.indexOf(gateways[i]+' '+SI) != -1){
            toSever = links[links.indexOf(gateways[i]+' '+SI)];
            printErr('toSever = '+toSever);
            break;
        }

        // 3
        else if(links.indexOf(SI+' '+gateways[i]) != -1){
            toSever = links[links.indexOf(SI+' '+gateways[i])];
            printErr('toSever = '+toSever);
            break;
        }

        // 4
        else{

            // 5
            for(var j = 0; j < links.length; j++){
                var node = links[j].split(' ');

                // 6
                if((node[0] == EI || node[1] == EI)){
                    toSever = links[j];
                    printErr('toSever = '+toSever);
                    break;
                }
            }
        } 
    }
    // Example: 0 1 are the indices of the nodes you wish to sever the link between
    //print("0 1");
    print(toSever);
}