export const convertNumber = (n: any) => {
  return (`00` + n).slice(-3)
}
export const convertBarToColor = (name: string) => {
  return name === 'hp'
    ? '#a6b91a'
    : name === 'attack'
    ? '#c22e28'
    : name === 'defense'
    ? '#f7d02c'
    : name === 'specia-attack'
    ? '#6390f0'
    : name === 'special-defense'
    ? '#a33ea1'
    : '#d685ad'
}

export const convertWeigth = (n: any) => {
  const kg = n / 10
  const lb = (kg / 0.45359237).toFixed(1)
  return `${kg} ( ${lb}lbs. )`
}

export const convertHeight = (n: any) => {
  const m = n / 10
  const ft = m * 3.281
  let test = (ft - 2) * 12

  return `${m}m ( ${Math.floor(ft)}"${Math.ceil(test)}' )`
}

export const regexNumber = (url: string) => {
  const urlString = url?.match(/\/([0-9]+)/)
  if (urlString) {
    const stractNumber = urlString[1]
    let test = convertNumber(stractNumber)
    return test
  }
}
