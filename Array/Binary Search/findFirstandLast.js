function findRange(nums, target) {
  let start = -1;
  let end = -1;

  // Find the starting position using binary search
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      start = mid;
      right = mid - 1; // Search for the leftmost occurrence
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Find the ending position using binary search
  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      end = mid;
      left = mid + 1; // Search for the rightmost occurrence
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [start, end];
}