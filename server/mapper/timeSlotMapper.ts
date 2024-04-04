import { TimeSlot } from "../model/timeSlot";

export function mapTimeSlot(response: any) {
  let result: TimeSlot = {
    userId: response.userId,
    dayOfWeek: response.dayOfWeek,
    startTime: response.startTime,
    endTime: response.endTime,
    reserved: response.reserved,
  };
  return result;
}
