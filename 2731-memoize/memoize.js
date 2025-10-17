/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    map = new Map()
    return function(...args) {
        // const key = JSON.stringify(args);
        // return cache.has(key) ? cache.get(key) : cache.set(key, fn(...args)).get(key);
            const keys = JSON.stringify(args);
            if(map.has(keys)){
                return map.get(keys)
            }else{
                const returnValue = fn(...args)
                map.set(keys,returnValue)
                return returnValue
            }
        // })
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */