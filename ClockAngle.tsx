function getClockAngle(hh_mm: string): number {
    const [hours, minutes] = hh_mm.split(":").map(Number);
  
    const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteAngle = (minutes / 60) * 360;
  
    const angleDiff = Math.abs(hourAngle - minuteAngle);
  
    return Math.min(angleDiff, 360 - angleDiff);
  }
  

  console.log(getClockAngle("09:00"));
  console.log(getClockAngle("17:30")); 
  
