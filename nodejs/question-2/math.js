
// Function to check if a number is prime
export function checkPrime(num) {
  // Negative numbers, 0, 1 are NOT prime
  if (num <= 1) return false;

  // Check divisibility from 2 to sqrt(num)
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false; // Not prime
    }
  }

  return true; // Prime
}
