function bottles() {
    var results='\n';
    for (var i=99;i>=3;i--){
        results += '    '+i.toString()+' bottles of beer on the wall, '+i.toString()+' bottles of beer.\n';
        results +='    Take one down and pass it around, '+ (i-1).toString()+' bottles of beer on the wall.\n';
    }
    results +=  '    2 bottles of beer on the wall, 2 bottles of beer.\n';
    results += '    Take one down and pass it around, 1 bottle of beer on the wall.\n';
    results += '    1 bottle of beer on the wall, 1 bottle of beer.\n';
    results += '    Take one down and pass it around, no more bottles of beer on the wall.\n';
    results +='    No more bottles of beer on the wall, no more bottles of beer.\n';
    results +='    Go to the store and buy some more, 99 bottles of beer on the wall.';
    console.log(results);
    return results;
}
module.exports=bottles;