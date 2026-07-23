let initialized = false;

// The assignment asks for a dynamic image gallery however I have demonstrated total DOM manipulation elsewhere in the dynamic FAQ code as that is completely built on the JS side. Because I already have a gallery on this page I will just convert it to be dynamic content videos for fun !

const main = () => {
  if (initialized) {
    return;
  }

  const videos = document.getElementsByClassName("feature-video");

  if (videos.length === 0) {
    console.error(
      "VIDEOS SHOULD NOT BE EMPTY. Cannot find videos for manipulation",
    );
    return;
  }

  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];

    video.addEventListener("mouseenter", (e) => {
      video.classList.add("spin");
    });

    video.addEventListener("mouseleave", (e) => {
      setTimeout(() => {
        video.classList.remove("spin");
      }, 500);
    });
  }

  initialized = true;
};

main();
