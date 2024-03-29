import { ref, set, get, update, remove } from "firebase/database";
import { database } from "../initFirebase";
import { v4 } from "uuid";
import { Appointment } from "../model/appointment";
import { mapAppointment } from "../mapper/appointmentMapper";

export async function createAppointment(appointment:Appointment) {
    console.log(`createTimeSlot is called with the time slot: ${appointment}`);
    const guid = v4();
    set(ref(database, 'appointment/' + guid), {
      userId: appointment.userId,
      timeSlotId: appointment.timeSlotId,
      customerDetailId: appointment.customerDetailId,
      comment : appointment.comment
    });
    console.log("createTimeSlot is successfully called");
}

export async function editAppointment(appointment:Appointment, appointmentId: string) {
    console.log(`editAppointment is called for appointment id: ${appointmentId} with the appointment: ${appointment}`);
    await update(ref(database, 'appointment/' + appointmentId), {
        userId: appointment.userId,
        timeSlotId: appointment.timeSlotId,
        customerDetailId: appointment.customerDetailId,
        comment : appointment.comment
    });
    console.log("editAppointment is successfully called");
}

export async function getAppointment(appointmentId: string) {
    console.log(`getAppointment is called for slot id: ${appointmentId}`);
    const resonse = await get(ref(database, 'appointment/' + appointmentId));
    const result = mapAppointment(resonse);
    console.log("getAppointment is successfully called");
    return result;
}

export async function getAllAppointments() {
    console.log(`getAllAppointments is called`);
    const response = await get(ref(database, 'appointment/'));
    const result = [];
    for (let item in response) {
        result.push(mapAppointment(item));
    }
    console.log("getAllAppointments is successfully called");
    return result;
}

export async function deleteAppointment(appointmentId: string) {
    console.log(`deleteAppointment is called for slot id: ${appointmentId}`);
    await remove(ref(database, 'appointment/' + appointmentId));
    console.log("deleteAppointment is successfully called");
}