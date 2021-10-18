export const getFormattedDate = (date) => {
  let d = new Date(date)
  let hour = parseInt(date?.substring(11, 13))
  let suffix = "AM"

  if (hour > 12) {
    hour = hour % 12
    suffix = "PM"
  }

  return {
    month: d.toLocaleString("default", { month: "long" }),
    day: date?.substring(8, 10),
    year: date?.substring(0, 4),
    hour: hour,
    minute: date?.substring(14, 16),
    suffix: suffix,
  }
}

export const getTimelyGreeting = () => {
  let greeting = ""
  const today = new Date()
  const curHr = today.getHours()
  if (curHr < 12) {
    greeting = "Good morning"
  } else if (curHr < 18) {
    greeting = "Good afternoon"
  } else {
    greeting = "Good evening"
  }

  return greeting
}
