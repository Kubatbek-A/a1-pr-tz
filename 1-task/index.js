// Solution #1 - O(n), O(1)
function moveZeros(arr) {
  let left = 0;
  let right = left + 1;

  while (right <= arr.length - 1) {
    if (arr[left] !== 0) {
      left++;
      right++;
    } else {
      if (arr[right] !== 0) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
      }
      right++;
    }
  }

  return arr;
}

// Solution #2 - O(n), O(n)
function moveZeros(arr) {
  const noZeroArray = arr.filter((item) => item !== 0);
  const zerosCount = arr.length - noZeroArray.length;

  if (!zerosCount || zerosCount === arr.length) {
    return arr;
  }

  const zerosArray = new Array(zerosCount).fill(0);

  return noZeroArray.concat(zerosArray);
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
console.log(moveZeros([false, 1, 5, 1, 2, "v", 1, 3, "a"]));
console.log(moveZeros([0, 0, 0, 0, 0, 0]));
console.log(moveZeros([0, 1, 0, 3, 12]));
console.log(moveZeros([0]));
console.log(moveZeros([]));
