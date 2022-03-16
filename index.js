// code your solution here
function superbowlWin(records){
    let hasWin = records.find((record) => record.result === "W")
    if (hasWin){
        return hasWin.year
    }
}