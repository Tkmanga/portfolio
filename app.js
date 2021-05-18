const $form = document.getElementById("contacto");
const $btnMailto = document.getElementById("truco");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const form = new FormData(this);
  $btnMailto.setAttribute(
    "href",
    `mailto:tacachojose@gmail.com?subject=${form.get("name")} ${form.get(
      "email"
    )}&body=${form.get("message")}`
  );
  $btnMailto.click();
}
