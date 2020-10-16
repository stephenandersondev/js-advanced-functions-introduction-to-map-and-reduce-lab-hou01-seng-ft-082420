function mapToNegativize(sourceArray) {
    return sourceArray.map(element => -1 * element)
}

function mapToNoChange(sourceArray) {
    return sourceArray;
}

function mapToDouble(sourceArray) {
    return sourceArray.map(element => 2 * element)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(element => element * element)
}

function reduceToTotal(sourceArray, startingPoint=0) {
    return sourceArray.reduce((accumulator,num) => {
        return accumulator + num;
    }, startingPoint)
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }



