const args = process.argv;
const rollsString = args && args.length > 2 ? args[2] : null;
const rolls = rollsString ? JSON.parse("[" + rollsString + "]") : 0;

const bowlingScore = rolls => {
  let _frame = 1;
  let _totalScore = 0;
  return rolls.reduce((_total, _value, _index, _scoreArr) => {
    if (_frame >= 10) return _total + _value;
    else if (_value === 10) {
      _frame++;
      _totalScore =
        _total +
        _value +
        (_scoreArr[_index + 1] || 0) +
        (_scoreArr[_index + 2] || 0);
    } else if (_frame % 1 !== 0) {
      _frame = Math.floor(++_frame);
      _totalScore =
        _value + _scoreArr[_index - 1] === 10
          ? _total + _value + (_scoreArr[_index + 1] || 0)
          : _total + _value;
    } else {
      _frame += 0.5;
      _totalScore = _total + _value;
    }
    return _totalScore > 300 ? 300 : _totalScore;
  }, 0);
};

rolls
  ? console.log("result:", bowlingScore(rolls))
  : console.log("Roll score is invalid");
