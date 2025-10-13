/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let y = x
        if(functions.length > 0){
            let len = functions.length
            while(len > 0){
                y = functions[len - 1](y)
                len--
            }
            return y
        }else{
            return x
        }

        //  return functions.reduceRight((acc, fn) => fn(acc), x)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */