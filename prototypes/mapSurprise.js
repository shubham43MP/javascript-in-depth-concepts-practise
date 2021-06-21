//  /*
  const val = [1, 2, 3, 4, 5]

  const result = val.map(function(item, index) {
    val.push(index)
    console.log('Value is ', val, val.length)
    return item * 5
  } )

  console.log('result is = ', result) // result is =  [ 5, 10, 15, 20, 25 ]
// */