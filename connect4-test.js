
describe("findSpotForCol should give a valid y position", function() {

    beforeEach( function() {
        const board = [
           [ null, null, null, null, null, null, null ],
           [ null, null, null, null, null, null, null ],
           [ null, null, null, null, null, null, null ],
           [ null, null, null, null, null, null, null ],
           [ null, null, null, null, null, null, null ],
           [ null, null, null, null, null, null, null ],
         ];
   });

      it("should give 5 for any x ", function() {
          expect(findSpotForCol(4)).toEqual(5);
          
      });
      
});

describe("checkForTie should give true if array is fully filed with 1 or 2, otherwise return false", function() {

      it("it should return false ", function() {
          expect(checkForTie()).toBeTruthy();
      });
      
});