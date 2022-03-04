console.log("Hello from the context script");

const aTags = document.getElementsByTagName("a");
for (const tag of aTags) {
  if (tag.textContent.includes("i")) {
    tag.style = "background-color: yellow;";
  }
}
