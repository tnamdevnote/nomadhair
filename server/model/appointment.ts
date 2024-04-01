import { TimeSlot } from "./timeSlot"

export type Appointment = {
    userId: string,
    timeSlotId: string,
    comment?: string | undefined,
    address1: string,
    address2?: string | undefined,
    city: string,
    state: string,
    zip: string,
    appointmentId?: string | undefined,
    timeSlot?: TimeSlot | undefined
}