export function getWeekday(): string {
  const days = [
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
  ]
  // getDay() - ger ett nummer 0-6 beroende på vilken veckodag det är, 0 = söndag, 1 = måndag osv
  return days[new Date().getDay()]
}

export function getWeekNumber(): number {
  const today = new Date()
  const oneJan = new Date(today.getFullYear(), 0, 1)

  // ((dagens datum)-(1/1) (omräknat från ms => dagar) + veckodag för 1/1) / 7
  return Math.ceil(
    ((today.getTime() - oneJan.getTime()) / (1000 * 60 * 60 * 24) +
      oneJan.getDay() +
      1) /
      7
  )
}
