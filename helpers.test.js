const {meanFind, 
    medianFind, 
    modeFind} = require('./helpers');

describe("#meanFind", function(){
    it("find the mean of an empty array", function(){
        expect(meanFind([])).toEqual(0)
    })
    it("find the mean of an array of numbers", function(){
        expect(meanFind([1, -1, 4, 2])).toEqual(1.5)
    })
})

describe("#medianFind", function(){
    it("find the median of an even set", function(){
        expect(medianFind([1, -1, 2, 3])).toEqual(1.5)
    })
    it("find the median of an odd set", function(){
        expect(medianFind([1, -1, 2])).toEqual(1)
    })
})

describe("#modeFind", function(){
    it("find the mode of a set", function(){
        expect(modeFind[1, 2, 2, 3, 3, 3]).toEqual(3)
    })
})