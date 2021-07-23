function clockMinuteAdder(time, minutesToAdd) {
  // Your code here:
  const clockMinuteAdder = (time, minutesToAdd) => {
    const [hours, minutes] = time.split(":");

    const totalMinutes = minutesToAdd + parseInt(minutes);
    const totalHours = Math.floor(totalMinutes / 60) + parseInt(hours);

    const newHours = ((totalHours - 1) % 12) + 1;
    const newMinutes = totalMinutes % 60;

    const formatHours = newHours > 9 ? newHours : `0${newHours}`;
    const formatMinutes = newMinutes > 9 ? newMinutes : `0${newMinutes}`;

    return `${formatHours}:${formatMinutes}`;
  };
}
