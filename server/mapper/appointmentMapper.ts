import { Appointment } from "../model/appointment"

export function mapAppointment(response: any) {
    let result: Appointment = {
        userId: response.userId,
        timeSlotId: response.timeSlotId,
        comment: response.note,
        address1: response.address1,
        address2: response.address2,
        city: response.city,
        state: response.state,
        zip: response.zipCode
    }
    return result;
}