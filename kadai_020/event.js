// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素をクリックした際にイベント処理を実行する
btn.addEventListener('click', () => {
  // 変更するテキストのHTML要素を抽出する
  const text = document.getElementById('text');

  // テキストを変更する
  text.textContent = 'ボタンをクリックしました';
});
