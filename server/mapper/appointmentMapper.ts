import { Appointment } from "../model/appointment"

export function mapAppointment(response: any) {
    let result:Appointment = {
        userId: response.userId,
        customerDetailId: response.customerDetailId,
        timeSlotId: response.timeSlotId,
        comment: response.comment
    }
    return result;
}