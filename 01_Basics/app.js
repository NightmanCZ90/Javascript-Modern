
const role = 'Director'
const name = "Jan Novak"

const team = {
  [role]: name
}

// function addProp(obj, k, v) {
//   const copy = {
//     ...obj
//   }
//   copy[k] = v;
//   return copy
// }

const addProp = (obj, k, v) => {
  return {
    ...obj,
    [k]: v
  }
}

const team2 = addProp(team, 'happy', ':)')
const res = addProp(team2, 'gender', 'male')

