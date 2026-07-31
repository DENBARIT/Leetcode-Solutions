/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let n = nums.length;

    // Step 1: Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        maxHeapify(nums, n, i);
    }

    // Step 2: Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Move current root to the end
        let temp = nums[0];
        nums[0] = nums[i];
        nums[i] = temp;

        // Call maxHeapify on the reduced heap
        maxHeapify(nums, i, 0);
    }

    return nums;
};

// Helper function to maintain the max heap property
function maxHeapify(arr, size, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // Left child index
    let right = 2 * i + 2; // Right child index

    // If left child is larger than root
    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than the largest so far
    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root, swap and continue heapifying
    if (largest !== i) {
        let swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree
        maxHeapify(arr, size, largest);
    }
}
