const arr = [1, 2, 3, 4, 1, 0, 2, 2];


	const divide = (arr, n) => {
  let result = [];
  let currentSubarray = [];

  for (let num of arr) {
    if (num <= n) {
      if (currentSubarray.reduce((sum, current) => sum + current, 0) + num <= n) {
        currentSubarray.push(num);
      } else {
        result.push([...currentSubarray]);
        currentSubarray = [num];
      }
    }
  }

  if (currentSubarray.length > 0) {
    result.push([...currentSubarray]);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
