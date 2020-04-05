export const getCites = (cities) => {
  return cities.map(item => item.city.concat(', ').concat(item.state))
}
