/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * Leetcode 189
 * Language: JavaScript
 */
 var rotate = function(nums, k) {
    /**
    * Version 1
    * For loop the array with the given k. Push the shifted array item to the tail immediately.
    * Time complexity: k, k may even greater than the length of the given array
    * Space complixity: 1, it's equal to the "i" in the for loop
    */
    for(let i = 0; i <= k; i++) {
        nums.unshift(nums.pop());
    }
    
    
    /**
    * Version 2
    * Instead of running the operation with k times, it will firstly check if k is greater than the given
    * array length. If greater, then calclulate the remainder with the array length. 
    */
    

    k = k % nums.length;
    
    for(let i = 0; i <= k; i++) {
        nums.unshift(nums.pop());
    }


    /**
     * Version 3
     * If there's a large array, then the method will use splice method to cut the orignial array and attach the cutted part to the array front
     */

     k = k % nums.length;
    
     const arrayTail = nums.slice(nums.length - k)
     
     nums.splice(nums.length - k)
     nums.unshift(...arrayTail)


     /**
      * Version 4
      * Removed unnecessary variable to save memory
      */

      k = k % nums.length;
    
      if(k) {
      nums.unshift(...nums.slice(-k))
      nums.splice( -k )
      }
}