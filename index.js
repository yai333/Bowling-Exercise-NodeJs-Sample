const args = process.argv;
const rollsString = args && args.length > 2 ? args[2] : null;
const rolls = rollsString ? JSON.parse("[" + rollsString + "]") : 0;

const getBowlingScore = rolls => {
  let _frame = 1;
  let _totalScore = 0;
  return rolls.reduce((_total, _value, _index, _scoreArr) => {
    if (_frame >= 10) _totalScore = _total + _value;
    else if (_value === 10) {
      //Strike
      _frame++;
      _totalScore =
        _total +
        _value +
        (_scoreArr[_index + 1] || 0) +
        (_scoreArr[_index + 2] || 0);
    } else if (_frame % 1 !== 0) {
      _frame = Math.floor(++_frame);
      //check whether score is spare
      _totalScore =
        _value + _scoreArr[_index - 1] === 10
          ? _total + _value + (_scoreArr[_index + 1] || 0)
          : _total + _value;
    } else {
      _frame += 0.5;
      _totalScore = _total + _value;
    }
    //maximum score is 300
    return _totalScore > 300 ? 300 : _totalScore;
  }, 0);
};

rolls
  ? console.log("Score:", getBowlingScore(rolls))
  : console.log("Rolls score is invalid");
