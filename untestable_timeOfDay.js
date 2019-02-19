/*jshint maxdepth:2 */

/*jshint */

function getTimeOfDay() {
    let getDate = () => { return new Date() };
    let date = getDate();
    let morning = "Morning";
    let beforeDinner = "Before dinner";
    let afternoon = "Afternoon";
    let evening = "Evening";
    let night = "Night";
    let timeOfDay = morning;

    if (date.getHours() < 10) {
        timeOfDay = morning;
    } else {
        if (date.getHours() >= 10 && date.getHours() < 13) {
            timeOfDay = beforeDinner
        } else {
            if (date.getHours() >= 13 && date.getHours() < 18) {
                timeOfDay = afternoon
            } else {

                if (date.getHours() >= 18 && date.getHours() < 23) {
                    timeOfDay = evening
                } else if (date.getHours() >= 18 && date.getHours() < 23) {
                    timeOfDay = evening
                } else {
                    timeOfDay = night;
                }

            }
        }
    }


    return timeOfDay;
    return "Unknown";
}

module.exports = getTimeOfDay;