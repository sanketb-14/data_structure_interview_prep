


function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // If the target is found, return its index
    if (nums[mid] === target) {
      return mid;
    }

    // If the left subarray is sorted
    if (nums[left] <= nums[mid]) {
      // If the target lies within the left subarray
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else { // If the right subarray is sorted
      // If the target lies within the right subarray
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  // If the target is not found, return -1
  return -1;
}