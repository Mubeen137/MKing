import { Observable, of } from "rxjs";

export function getCurrentTimePeriod(): Observable<number> {
  let currentHour = new Date().getSeconds()
  console.log(currentHour, 'time');
  return of (currentHour)
}
