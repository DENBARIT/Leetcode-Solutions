var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n);
    
    // Step 1: Calculate prefix products (left side)
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefix;
        prefix *= nums[i];
    }
    
    // Step 2: Calculate suffix products (right side) on the fly
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffix;
        suffix *= nums[i];
    }
    
    return answer;
};
