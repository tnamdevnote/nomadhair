import { TimeSlot } from "./timeSlot"

export type Appointment = {
    userId: string,
    timeSlotId: string,
    comment?: string,
    address1: string,
    address2?: string,
    city: string,
    state: string,
    zip: string,
    appointmentId?: string,
    timeSlot?: TimeSlot
}