import Room from "./interface/Room";

const a = (room: Room) => {
    const { code, name: { nl: name } } = room;
    if (!code.startsWith("#")) return code;
    if (name.startsWith("BB")) return name.slice(2, 12);
    return name.slice(0, 10);
};

const parseRoomNumber = (room: Room) => {
    const roomCode = a(room);
    return roomCode.replaceAll(" ", "")
};

export default parseRoomNumber;