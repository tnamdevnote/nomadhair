export type Appointment = {
    userId: string,
    timeSlotId: string,
    comment: string,
    address1: string | undefined,
    address2: string | undefined,
    city: string | undefined,
    state: string | undefined,
    zip: string | undefined
}