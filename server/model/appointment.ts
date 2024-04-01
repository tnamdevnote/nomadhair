import { TimeSlot } from "./timeSlot"

export type Appointment = {
    userId: string,
    timeSlotId: string,
<<<<<<< HEAD
    comment?: string | undefined,
    address1: string,
    address2?: string | undefined,
    city: string,
    state: string,
    zip: string,
    appointmentId?: string | undefined,
    timeSlot?: TimeSlot | undefined
=======
    comment?: string,
    address1: string | undefined,
    address2?: string | undefined,
    city: string | undefined,
    state: string | undefined,
    zip: string | undefined
>>>>>>> eea8206 (implement get appointment)
}