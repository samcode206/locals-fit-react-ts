
export function transformTime(milSpec: [], type: string){
    const converted = []; 
    for(const time of milSpec){
      const timeSlot = []; 
      if (type === "military"){
        timeSlot[0] = time[0] / 100; 
        timeSlot[1] = time[1] / 100; 
        converted.push(timeSlot);
      } else {  
        timeSlot[0] = time[0] * 100; 
        timeSlot[1] = time[1] * 100; 
        converted.push(timeSlot);
      }
    }
    return converted; 
}; 

