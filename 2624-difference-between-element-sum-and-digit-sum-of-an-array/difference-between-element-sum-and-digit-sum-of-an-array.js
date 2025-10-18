/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let secondNum = 0;
    const firstNum = nums.reduce((tot,acc)=>{
        let temp = acc
        while(temp > 0){
            secondNum = secondNum +  temp % 10
            temp = Math.floor(temp / 10);
        }
        return tot + acc
    },0)

    return Math.abs(firstNum - secondNum)
};