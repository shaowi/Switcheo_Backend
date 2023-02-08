var sum_to_n_a = function (n: number) {
  // Applying the formula for the sum of an arithmetic sequence (Mathematical)
  return (n / 2) * (1 + n);
};

var sum_to_n_b = function (n: number) {
  // Using a for loop and increment the sum (Iterative)
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

var sum_to_n_c = function (n: number) {
  // Using a recursion to increment the sum (Recursive)
  const _sum_to_n_c = (num: number, sum: number): number => {
    if (num === n) {
      return sum;
    }
    num++;
    return _sum_to_n_c(num, num + sum);
  };

  return _sum_to_n_c(1, 1);
};

const a = sum_to_n_a(10);
const b = sum_to_n_b(10);
const c = sum_to_n_c(10);
console.log(a, b, c);
