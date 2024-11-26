// 'today'に現在の日付を代入
const today = new Date();

// 現在の日付から'年''月''日'を取得する
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();

// コンソールに出力する
console.log(year + '年' + month + '月' + date + '日');
