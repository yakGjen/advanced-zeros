module.exports = function getZerosCount(number, base) {
  const divis = getDivisors(base);
    let totalImpact = [];
    let result = [];
    
    let i = 0;
    for (key in divis) {
      result.push(0);
      for (let power = 1; number / Math.pow(key, power) > 1; power++) {
        result[i] += Math.floor(number / Math.pow(key, power));
      }
      result[i] = Math.floor(result[i] / divis[key]);
      i++;
    }
    result = Math.min(...result);
		
    return result;
		
	function getDivisors(base) {
		let divis = {};
		for (let startVal = 2; startVal <= base; startVal++) {
			while (base % startVal === 0) {
				divis[startVal] ? divis[startVal]++ : divis[startVal] = 1;
				base /= startVal;
			}
		}
		return divis;
	}
}