// フォーム送信処理（簡易デモ用）
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("formMessage").innerText = "送信ありがとうございました！";
  this.reset();
});
