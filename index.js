document.querySelectorAll(".toggle-btn").forEach(btn =>
  btn.addEventListener("click", () => {
    const containerClasses = document.querySelector(".container").classList;
    containerClasses.length > 1
      ? containerClasses.remove("form-right")
      : containerClasses.add("form-right");
  })
);
