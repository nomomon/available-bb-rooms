import Room from "./interface/Room";

const parseRoomNumber = (room: Room) => {
    const { code, name: { nl: name } } = room;
    if (!code.startsWith("#")) return code;
    if (name.startsWith("BB")) return name.slice(2, 12);
    return name.slice(0, 10);
};

export default parseRoomNumber;