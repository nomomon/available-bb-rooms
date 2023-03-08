import getAvaliableRooms from "@/components/getAvaliableRooms"
import getData from "@/components/getData"
import Activity from "@/components/interface/Activity";
import Room from "@/components/interface/Room";
import parseRoomNumber from "@/components/parseRoomNumber";
import getRoomDescription from "@/components/getRoomDescription";

export default function Index() {
    const avaliableRooms = new Set();

    const data = getData();

    if (Object.keys(data).length < 5) return <h1>Loading...</h1>

    const ROOMS = Object.keys(data).filter(
        (key) => key.endsWith("ROOMS")).sort();
    const ACTIVITY = Object.keys(data).filter(
        (key) => key.endsWith("ACTIVITY")).sort();

    for (let i = 0; i < ROOMS.length; i++) {
        // @ts-expect-error
        const rooms = data[ROOMS[i]] as Room[];
        // @ts-expect-error
        const activities = data[ACTIVITY[i]] as Activity[];

        console.log(ROOMS[i], ACTIVITY)

        const r = getAvaliableRooms(activities, rooms);

        for (let j = 0; j < r.length; j++) {
            const roomNumber = parseRoomNumber(r[j]);
            avaliableRooms.add(roomNumber);
        }
    }

    // @ts-expect-error
    const date = new Date(data["META"].lastUpdated).toLocaleString();

    return (
        <>
            <h1>Index</h1>

            <h2>Available rooms in the coming hour</h2>

            <p>
                Last updated {date}
            </p>
            <ul>
                {Array.from(avaliableRooms).sort().map((room, i) => (
                    <li key={i}>
                        {room as string}
                        <span style={{ width: "1rem", display: "inline-block" }}></span>
                        {getRoomDescription(room as string)}
                    </li>
                ))}
            </ul>
            <iframe src="https://nomomon.github.io/notion-namaz-time/" style={{ width: "90vw" }}></iframe>
        </>
    )
}
