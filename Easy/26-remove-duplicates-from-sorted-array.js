/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // nums is sorted like [1,2,3,4,5]

  // console.log(nums);

  newNums = nums.map((e) => {
    console.log(nums[nums.indexOf(e)]);
    console.log("HAHA " + nums[nums.indexOf(e) - 1]);
    nums[nums.indexOf(e)] === 1;
  })

  // console.log(newNums)
}

console.log(removeDuplicates([1, 1, 2, 3, 4, 4, 5]));
