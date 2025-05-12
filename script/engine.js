// Alterna entre o mundo normal e o mundo invertido
function switchTheme() {
  const body = document.body;
  const audio = document.getElementById("music");

  const isDark = body.classList.contains("dark-theme");

  if (isDark) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    audio.src = "assets/audios/normal-world.mpeg";
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    audio.src = "assets/audios/inverted-world.mpeg";
  }

  // Reinicia a música
  audio.play();
}

function showCustomAlert(message) {
  document.getElementById("alertMessage").innerText = message;
  document.getElementById("customAlert").classList.remove("hidden");
}

function closeAlert() {
  document.getElementById("customAlert").classList.add("hidden");
}

document.getElementById("btnSubscribe").addEventListener("click", () => {
  const name = document.getElementById("txtName").value;
  const email = document.getElementById("txtEmail").value;
  const level = document.getElementById("txtLevel").value;
  const character = document.getElementById("txtCharacter").value;

  if (!name || !email || !level || !character) {
    showCustomAlert("Por favor, preencha todos os campos antes de se inscrever.");
    return;
  }

  showCustomAlert(`Bem-vindo ao submundo, ${name}! Sua alma foi marcada pelo selo do Clube de D&D. Prepare-se para a campanha mais insana da sua vida!`);
});

// document.getElementById("btnSubscribe").addEventListener("click", () => {
//   const name = document.getElementById("txtName").value;
//   const email = document.getElementById("txtEmail").value;
//   const level = document.getElementById("txtLevel").value;
//   const character = document.getElementById("txtCharacter").value;

//   if (!name || !email || !level || !character) {
//     Swal.fire({
//       icon: 'warning',
//       title: 'Oops!',
//       text: 'Por favor, preencha todos os campos antes de se inscrever.',
//     });
//     return;
//   }

//   Swal.fire({
//     icon: 'success',
//     title: `Inscrição Confirmada!`,
//     html: `<strong>${name}</strong>, você foi inscrito(a) com sucesso no Clube de D&D! 🐲`,
//     confirmButtonText: 'Fechar',
//     background: '#000',
//     color: '#fff',
//   });
// });