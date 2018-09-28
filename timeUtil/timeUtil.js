var timeUntil = (after, before) => {
    var times = {
        days: 0,
        hours: 0,
        minutes: 0
    };
    var leftover, timeBetween;

    timeBetween = after - before;

    times.days = Math.floor(timeBetween / 86400000);
    leftover = timeBetween % 86400000;

    times.hours = Math.floor(leftover/3600000);
    leftover = leftover%3600000;

    times.minutes = Math.floor(leftover/60000);
    leftover = leftover%60000;
    return times
};

var toDate = (date) => {
    return `${date.toDateString()}, ${date.toLocaleTimeString()}`
}

module.exports = {
    timeUntil,
    toDate
};