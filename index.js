function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(workSpace = 'go to the office') {
    return `This Monday, I will ${workSpace}.`
}

function wrapAdjective(adjOuter = "*") {
    const adjInner = function(adj = 'special') {
        return `You are ${adjOuter}${adj}${adjOuter}!`
    }
    return adjInner
}