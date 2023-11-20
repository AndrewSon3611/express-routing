function counting(arr) {
    return arr.reduce(function(acc, next) {
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
  }
  

function convNumb(numsAsStrings){
    let res = [];

    for (let i = 0; i < numsAsStrings.length; i++){
        let strToNum = Number(numsAsStrings[i]);

        if (Number.isNaN(strToNum)){
            return new Error(
                `The value '${numsAsStrings[i]}' at index ${i} is not a valid number!`
            );
        }
        res.push(strToNum);
    }
    return res;
}

function modeFind(arr){
    let freqCount = counting(arr);

    let count = 0;
    let mostFreq;

    for(let key in freqCount){
        if(freqCount[key] > count){
            mostFreq = key;
            count = freqCount[key];
        }
    }
    return +mostFreq;
}

function meanFind(nums){
    if(nums.length === 0){
        return 0;
    }
    return nums.reduce(function(acc, cur){
        return acc + cur;
    }) / nums.length;
}

function medianFind(nums){
    nums.sort((a , b ) => a - b);
    let midInd = Math.floor(nums.length/2);
    let median;

    if(nums.length % 2 === 0){
        median = (nums[midInd] + nums[midInd - 1])/2;
    }
    else{
        median = (nums[midInd]);
    }
    return median;
}

module.exports = {
    medianFind,
    modeFind,
    meanFind,
    counting,
    convNumb
};
