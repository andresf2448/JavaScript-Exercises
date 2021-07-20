const mdArraySum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
      if (Array.isArray(arr[i])) sum += mdArraySum(arr[i])
      else sum += arr[i];
  }
  return sum;
}