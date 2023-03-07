const roomDescription = {
    "5161.0151": "huge lecture hall",
    "5161.0253": "usual lecture hall",
    "5161.0216": "computer lab",
    "5161.0222": "tiny lecture hall",
}

const getRoomDescription = (roomCode: string) => {
    // @ts-ignore
    return roomDescription[roomCode] || "";
};

export default getRoomDescription;