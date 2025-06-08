export default function Home() {
  const content = document.querySelector("#content");
  content.textContent = "";

  // Welcome description
  const description = document.createElement("p");
  description.textContent =
    "欢迎光临土耳其烤肉饭!这里为您带来实惠又美味的快餐选择, 新鲜烤肉搭配丰富配菜, 让您吃得开心又省心!";
  content.appendChild(description);

  // Price section
  const section = document.createElement("section");
  const title = document.createElement("h2");
  title.textContent = "价格表";
  section.appendChild(title);

  const priceList = document.createElement("ul");
  const prices = [
    "两荤两素: 24元 (全天供应)",
    "两荤一素: 18元 (12:30前)",
    "两荤一素: 15元 (12:30后及晚上)",
  ];

  prices.forEach((price) => {
    const listItem = document.createElement("li");
    listItem.textContent = price;
    priceList.appendChild(listItem);
  });

  section.appendChild(priceList);

  // Add restaurant info
  const infoSection = document.createElement("div");
  infoSection.classList.add("restaurant-info");

  const infoText = document.createElement("p");
  infoText.textContent =
    "📍 营业时间：周一至周日 11:30-19:30 | 🔥 新鲜现做，绝不过夜";

  infoSection.appendChild(infoText);
  section.appendChild(infoSection);

  content.appendChild(section);
}
