// ヒーローボタンをクリックしたら「お問い合わせ」セクションへスクロール
document.getElementById("contactBtn").addEventListener("click", function() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
