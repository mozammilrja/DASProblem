function primeFactors(n) {
  const factors = [];

  // Find all 2s that divide n
  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }

  // At this point, n must be an odd number
  // Start checking for prime factors from 3 onwards
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }

  // If n is still greater than 1, it's a prime factor itself
  if (n > 1) {
    factors.push(n);
  }

  return factors;
}

const num = 36;
const factors = primeFactors(num);
console.log(`Prime factors of ${num}: ${factors}`);
