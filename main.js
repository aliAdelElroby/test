let btn = document.querySelector(".record-btn");

btn.addEventListener("click", async function () {
  const stream = navigator.mediaDevices.getDisplayMedia({
    video: true,
    audio: true,
  });
});
