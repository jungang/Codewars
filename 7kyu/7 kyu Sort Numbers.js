"use strict";
/**
 * Created by jg on 2018/4/4.
 */



/**
 *
 Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

 For example:

 solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
 solution(null); // should return []
 */

/***********************************************************************/


function solution(nums){
	return nums ? nums.sort((b, a) => b - a) : []
}


console.log(solution([1, 2, 10, 50, 5]));
console.log(solution([]));
