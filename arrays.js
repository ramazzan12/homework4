

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    nums.sort((a, b) => a - b);
    let array=[];
    for (let i=nums.length-1; i>0; i--){
        if (nums[i]!=nums[i-1]){
            return nums[i-1];
        }
    }
    return -1;
}

