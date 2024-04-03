import { ref, set, get, update, child, remove } from "firebase/database";
import { TimeSlot } from "../model/timeSlot";
import { database } from "../initFirebase";
import { v4 } from "uuid";
import { mapTimeSlot } from "../mapper/timeSlotMapper";

export async function createTimeSlot(timeslot:TimeSlot) {
    console.log(`createTimeSlot is called with the time slot: ${timeslot}`);
    const guid = v4();
    set(ref(database, 'timeSlot/' + guid), {
      userId: timeslot.userId,
      dayOfWeek: timeslot.dayOfWeek,
      startTime: timeslot.startTime,
      endTime : timeslot.endTime,
      reserved: timeslot.reserved
    });
    console.log("createTimeSlot is successfully called");
    return guid;
}

export async function editTimeSlot(timeslot:TimeSlot, timeSlotId: string) {
    console.log(`editTimeSlot is called for slot id: ${timeSlotId} with the time slot: ${timeslot}`);
    await update(ref(database, 'timeSlot/' + timeSlotId), {
      userId: timeslot.userId,
      dayOfWeek: timeslot.dayOfWeek,
      startTime: timeslot.startTime,
      endTime : timeslot.endTime,
      reserved: timeslot.reserved
    });
    console.log("editTimeSlot is successfully called");
}

export async function getTimeSlot(timeSlotId: string) {
    console.log(`getTimeSlot is called for slot id: ${timeSlotId}`);
    const response = (await get(ref(database, 'timeSlot/' + timeSlotId))).val();
    const result = mapTimeSlot(response);
    console.log("editTimeSlot is successfully called");
    return result;
}

export async function getAllTimeSlots() {
    console.log(`getAllTimeSlot is called`);
    const response = await get(ref(database, 'timeSlot/'));
    const result = [];
    for (let item in response) {
        result.push(mapTimeSlot(item));
    }
    console.log("getAllTimeSlot is successfully called");
    return result;
}

export async function deleteTimeSlot(timeSlotId: string) {
    console.log(`deleteTimeSlot is called for slot id: ${timeSlotId}`);
    await remove(ref(database, 'timeSlot/' + timeSlotId));
    console.log("deleteTimeSlot is successfully called");
}