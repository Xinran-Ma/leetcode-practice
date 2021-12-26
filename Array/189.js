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
        nums.push(nums.shift());
    }
    
    
    /**
    * Version 2
    * Instead of running the operation with k times, it will firstly check if k is greater than the given
    * array length. If greater, then calclulate the remainder with the array length. 
    */
    

    k = k % nums.length;
    
    for(let i = 0; i <= k; i++) {
        nums.push(nums.shift());
    }
}