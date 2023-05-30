import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"

await import("dayjs/locale/es-us.js")

dayjs.locale("es-us")
dayjs.extend(relativeTime)

function humanize(date) {
    const wrappedDate = dayjs(date)
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));

    const isCurrentYear = wrappedDate.year() === new Date().getFullYear();

    if(!isCurrentYear) {
        return wrappedDate.format("MMMM DD, YYYY")
    } else if(daysDiff <= 30) {
        return wrappedDate.fromNow();
    } else {
        return wrappedDate.format("MMMM DD")
    }
}


const humanizeDate = humanize(dayjs().subtract(500, "days"));
document.getElementById("date1").innerHTML = humanizeDate;
document.getElementById("date2").innerHTML = humanizeDate;
document.getElementById("date3").innerHTML = humanizeDate;
document.getElementById("date4").innerHTML = humanizeDate;
document.getElementById("date5").innerHTML = humanizeDate;
document.getElementById("date6").innerHTML = humanizeDate;