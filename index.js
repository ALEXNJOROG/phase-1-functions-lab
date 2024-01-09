function distanceFromHqInBlocks(value){
    let hq = 42;
    return Math.abs(value - hq);

}

function distanceFromHqInFeet(value){
    let blocks = distanceFromHqInBlocks(value);
    return(blocks * 264);


}

function distanceTravelledInFeet(start, stop){
    let blocksTravelled = Math.abs(stop - start)
    return(blocksTravelled * 264)


}

function calculatesFarePrice(start, stop){
    let distance = distanceTravelledInFeet(start, stop)
    if (distance <= 400) {
        return(0);   
    }
    else if (distance > 400 && distance <= 2000) {
        return(distance - 400) * 0.02;   
    }
    else if (distance > 2000 && distance <2500) {
        return(25);
        
    }
    else {
        return('cannot travel that far');
    }

}