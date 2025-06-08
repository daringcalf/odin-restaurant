import kebab1 from "./img/kebab1.jpg";
import kebab2 from "./img/kebab2.jpg";
import kebab3 from "./img/kebab3.jpg";
import kebab4 from "./img/kebab4.jpg";
import kebab5 from "./img/kebab5.jpg";
import kebab6 from "./img/kebab6.jpg";
import kebab7 from "./img/kebab7.jpg";

export default function Showcase() {
  const content = document.querySelector("#content");
  content.textContent = "";

  // Add description
  const description = document.createElement("p");
  description.textContent = "真实顾客拍摄, 每一张都是对我们美味的最好证明!";
  description.classList.add("gallery-description");
  content.appendChild(description);

  // Create gallery section
  const section = document.createElement("section");
  section.classList.add("gallery");

  const imageFiles = [kebab1, kebab2, kebab3, kebab4, kebab5, kebab6, kebab7];
  const imageDescriptions = [
    "经典双荤双素套餐",
    "香嫩烤肉配菜丰富",
    "色香味俱全",
    "新鲜蔬菜搭配",
    "丰盛的一餐",
    "口感绝佳",
    "顾客最爱",
  ];

  const dialog = document.querySelector("#large-image-dialog");
  const dialogContent = document.querySelector(".dialog-content");

  imageFiles.forEach((file, index) => {
    const imageContainer = document.createElement("div");
    imageContainer.addEventListener("click", () => {
      // Clear previous content
      dialogContent.textContent = "";

      const largeImage = document.createElement("img");
      largeImage.classList.add("large-image");
      largeImage.alt = imageDescriptions[index] || "美味土耳其烤肉饭";
      largeImage.src = file;
      dialogContent.appendChild(largeImage);
      dialog.showModal();
    });

    imageContainer.classList.add("gallery-image-container");

    const img = document.createElement("img");
    img.src = file;
    img.alt = "土耳其烤肉饭";
    img.classList.add("showcase-image");

    const overlay = document.createElement("div");
    overlay.classList.add("gallery-overlay");
    overlay.textContent = imageDescriptions[index] || "美味土耳其烤肉饭";

    imageContainer.appendChild(img);
    imageContainer.appendChild(overlay);

    section.appendChild(imageContainer);
  });

  content.appendChild(section);
}
