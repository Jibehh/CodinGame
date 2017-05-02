/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/

// game loop
while (true) {
    
    var toShoot; // Which mountain will be shooted
    var toShootH = 0; // Height of th mountain that will be shooted
    
    // For each moutain
    for (var i = 0; i < 8; i++) {
        var mountainH = parseInt(readline()); // represents the height of one mountain.
        // IF the mountain height is over the moutain to shoot height
        if(mountainH > toShootH){
            // THEN the mountain to shoot is the actual mountain
            toShoot = i;
            // Update the mountain to shoot height
            toShootH = mountainH;
        }
    }

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    print(toShoot); // The index of the mountain to fire on.
}
