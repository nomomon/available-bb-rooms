import Room from "./interface/Room";
import Activity from "./interface/Activity";

// @ts-ignore
Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
}

const getAvaliableRooms = (
    activities: Activity[],
    rooms: Room[],                 // @ts-ignore
    from = new Date().addHours(0), // @ts-ignore
    to = new Date().addHours(1)
) => {
    const activitiesAtTime = activities.filter(({ start: s, end: e }) => {
        const start = new Date(`${s[0]}-${s[1]}-${s[2]} ${s[3]}:${s[4]}`);
        const end = new Date(`${e[0]}-${e[1]}-${e[2]} ${e[3]}:${e[4]}`);

        return (start <= to && end >= from);
    })

    const unavailableRoomCodes = activitiesAtTime.map(
        ({ locationUnits: u }) => u[0].code
    );

    return rooms.filter(({ code }) => !unavailableRoomCodes.includes(code));
}



export default getAvaliableRooms;