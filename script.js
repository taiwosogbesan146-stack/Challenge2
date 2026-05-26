// =========================
// DARK MODE
// =========================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){

    themeToggle.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

  }else{

    themeToggle.innerHTML =
    '<i class="fa-solid fa-moon"></i>';

  }

});


// =========================
// ACTIVE TABS
// =========================

const tabs =
document.querySelectorAll(".tab");

tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    tabs.forEach(btn => {
      btn.classList.remove("active");
    });

    tab.classList.add("active");

  });

});


// =========================
// SIDEBAR ACTIVE
// =========================

const menuItems =
document.querySelectorAll(".menu-item");

menuItems.forEach(item => {

  item.addEventListener("click", () => {

    menuItems.forEach(menu => {
      menu.classList.remove("active");
    });

    item.classList.add("active");

  });

});


// =========================
// SEARCH FILTER
// =========================

const searchInput =
document.getElementById("searchInput");

const cards =
document.querySelectorAll(".card");

searchInput.addEventListener("keyup", () => {

  const value =
  searchInput.value.toLowerCase();

  cards.forEach(card => {

    const text =
    card.textContent.toLowerCase();

    if(text.includes(value)){

      card.style.display = "block";

    }else{

      card.style.display = "none";

    }

  });

});


// =========================
// REFRESH BUTTON
// =========================

const refreshBtn =
document.querySelectorAll(".toolbar-btn")[1];

refreshBtn.addEventListener("click", () => {

  refreshBtn.innerHTML =
  '<i class="fa-solid fa-rotate-right fa-spin"></i>';

  setTimeout(() => {

    location.reload();

  }, 1000);

});


// =========================
// NOTIFICATION BELL
// =========================

const bellBtn =
document.querySelectorAll(".icon-btn")[0];

bellBtn.addEventListener("click", () => {

  alert("You have 5 new notifications");

});


// =========================
// PLUS BUTTON
// =========================

const plusBtn =
document.querySelectorAll(".icon-btn")[0];

plusBtn.addEventListener("click", () => {
 const content =
  document.querySelector(".content");

  const newCard =
  document.createElement("div");

  newCard.classList.add("card");

  newCard.innerHTML = `

    <div class="card-top">

      <div class="card-left">
        <span class="small-dot green"></span>
        <span>New Article</span>
      </div>

      <span>Now</span>

    </div>

    <h2>
      New Dynamic Card Added
    </h2>

    <p>
      This card was added using JavaScript.
    </p>

    <span class="tag ai">
      Dynamic
    </span>

  `;

  content.appendChild(newCard);

});


// =========================
// MARK ALL READ
// =========================

const markReadBtn =
document.querySelector(".blue-btn");

const unreadCount = document.getElementById("unreadCount");

markReadBtn.addEventListener("click", () => {

  const cards =
  document.querySelectorAll(".card");

  cards.forEach(card => {

    card.style.opacity = "0.6";

  unreadCount.innerHTML = "0 unread"

  });

  markReadBtn.innerHTML =
  "All Read";

});


// =========================
// GRID VIEW BUTTON
// =========================

const gridBtn =
document.querySelectorAll(".toolbar-btn")[1];

gridBtn.addEventListener("dblclick", () => {

  const content =
  document.querySelector(".content");

  content.style.display = "grid";

  content.style.gridTemplateColumns =
  "1fr 1fr";

  content.style.gap = "20px";

});


// =========================
// LIST VIEW BUTTON
// =========================

const listBtn =
document.querySelectorAll(".toolbar-btn")[0];

listBtn.addEventListener("dblclick", () => {

  const content =
  document.querySelector(".content");

  content.style.display = "block";

});


// =========================
// CARD CLICK EFFECT
// =========================

const allCards =
document.querySelectorAll(".card");

allCards.forEach(card => {

  card.addEventListener("click", () => {

    card.style.transform =
    "scale(0.98)";

    setTimeout(() => {

      card.style.transform =
      "scale(1)";

    }, 150);

  });

});


// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener("load", () => {

  document.body.style.opacity = "1";

});



// =========================
// MOBILE SIDEBAR TOGGLE
// =========================

const sidebar =
document.querySelector(".sidebar");

window.addEventListener("resize", () => {

  if(window.innerWidth < 700){

    sidebar.style.display = "none";

  }else{

    sidebar.style.display = "flex";

  }

});