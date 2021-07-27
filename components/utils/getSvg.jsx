export const createElement = (str) => {
  const div = document.createElement('div');
  div.innerHTML = str;

  return div;
};

export const numWord = (value, words) => {
  const newValue = Math.abs(value) % 100;
  const num = newValue % 10;
  if (newValue > 10 && newValue < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num === 1) return words[0];

  return words[2];
};
