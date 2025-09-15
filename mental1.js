const sumByCategory = (data) => {
  const result = {};
  for (const { category, value } of data) {
    result[category] = (result[category] || 0) + value;
  }
  return result;
};

const data = [
  { category: "A", value: 10 },
  { category: "B", value: 20 },
  { category: "A", value: 15 },
  { category: "C", value: 5 },
  { category: "B", value: 25 },
];

console.log(sumByCategory(data));
