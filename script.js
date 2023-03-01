let slideIndex = 0; // 初始化幻燈片的索引

// 計時器：setInterval；每經過2.5秒，觸發一次showSlides函數(切換一張幻燈片)
setInterval(showSlides, 2500);

/* 使用 getElementsByClassName 方法從 HTML 文檔中找出所有擁有 mySlides 類別的元素，
並將它們存儲在一個名為 slides 的類陣列對象中。
 這個類陣列對象可以被當作一個陣列使用，可以通過索引值訪問其中的元素，
 例如 slides[0] 就代表第一個 mySlides 元素。*/
function showSlides() {
  const slides = document.getElementsByClassName("mySlides");

  // 遍歷每個幻燈片，並隱藏
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // 增加幻燈片的索引
  slideIndex++;

  // 如果幻燈片的索引大於幻燈片的總數，則重新從第一張開始
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // 顯示當前幻燈片
  slides[slideIndex - 1].style.display = "block";
}
