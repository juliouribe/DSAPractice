function SearchingChallenge(strArr) {
  // create coordinate array
  const matrix = [
    [0, 0], [0, 1], [0, 2], [0, 3],
    [1, 0], [1, 1], [1, 2], [1, 3],
    [2, 0], [2, 1], [2, 2], [2, 3],
    [3, 0], [3, 1], [3, 2], [3, 3]
  ]
  // flatten the strArr
  const flattenArray = flatten(strArr)
  // segreagate and map flattenArray with matrix to get coordinate of food,charlie and home
  const segregatedCoordinates = flattenArray.reduce((obj, char, index) => {
    if (char === 'F') obj['food'].push(matrix[index])
    else if (char === 'C') obj['dog'] = matrix[index]
    else if (char === 'H') obj['home'] = matrix[index]
    return obj
  }, { "food": [], dog: null, home: null })

  // construct possible routes by permutating food coordinates
  let possibleRoutes = permuate(segregatedCoordinates['food'])
  // push dog and home in possibleRoutes at start and end positions
  possibleRoutes = possibleRoutes.map((route) => {
    return [segregatedCoordinates['dog'], ...route, segregatedCoordinates['home']]
  })
  // Calculate distances from every possible route
  const distances = possibleRoutes.reduce((distances, route) => {
    let moveLength = 0
    for (let i = 0; i < route.length - 1; i++) {
      let current = route[i], next = route[i + 1]
      let xCoordinatePath = current[0] > next[0] ? (current[0] - next[0]) : (next[0] - current[0])
      let yCoordinatePath = current[1] > next[1] ? (current[1] - next[1]) : (next[1] - current[1])
      moveLength += xCoordinatePath + yCoordinatePath
    }
    distances.push(moveLength)
    return distances
  }, [])

  return Math.min(...distances);
}
function permuate(arr) {
  if (arr.length <= 2) return (arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr)
  return arr.reduce((res, ele, index) => {
    res = [...res, ...permuate([...arr.slice(0, index), ...arr.slice(index + 1)]).map(val => [ele, ...val])]
    return res
  }, [])
}
function flatten(inputtedArr) {
  return inputtedArr.reduce((arr, row) => {
    arr = [...arr, ...row]
    return arr
  }, [])
}
console.log(SearchingChallenge(['FOOF', 'OCOO', 'OOOH', 'FOOO']));
