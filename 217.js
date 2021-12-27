/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
     /**
      * Version 1
      * Always pop up the first item of the array and try to find if it exist in the remaining array
      */
    let targetValue = nums.shift();
    
    while(nums.length > 0) {
        if(nums.indexOf(targetValue) >= 0) {
            return true;
        }
        
        targetValue = nums.shift();
    }


    /**
     * Version 2
     * Try to find if the current item index is equal to the one's index when indexing the array from last to the first
     */

    for(let i = 0; i < nums.length; i++) {
        if(nums.lastIndexOf(nums[i]) !== i) {
            return true
        }
    }

    /**
     * Version 3
     * pre-sort the array, then find the neighbour if they're equal 
     */

    let theArray = nums.sort()

    for(let i = 0; i < theArray.length; i++) {
        if(theArray[i] === theArray[i + 1]) {
            return true
        }
    }


    /**
     * Version 4
     * put all array items to a set and compare the length of the array and the set
     */

    let theSet = new Set(nums)
    
    if(theSet.size !== nums.length) {
        return true
    }
    
    return false
};