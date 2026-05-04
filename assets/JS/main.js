
const toastLiveExample = document.getElementById('liveToast');

if (toastLiveExample) {
  // Configura o Toast para esconder automaticamente (autohide) e o tempo (delay)
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample, {
    autohide: true,
    delay: 3000 // Fecha após 3 segundos
  });

  const toastButtons = document.querySelectorAll('.btn-toast');

  toastButtons.forEach(button => {
    button.addEventListener('click', () => {
      toastBootstrap.show();
    });
  });
}


// Selecionar o formulário pelo ID
const form = document.getElementById('appointmentForm');

// Selecionar o Toast (para dar feedback de sucesso)
const toastElement = document.getElementById('liveToast');
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastElement);

form.addEventListener('submit', function (event) {
  // 1. Verificar se o formulário é válido segundo as regras do HTML
  if (!form.checkValidity()) {
    event.preventDefault(); // Impede o envio
    event.stopPropagation(); // Trava a propagação do evento
  } else {
    // 2. Se for VÁLIDO:
    event.preventDefault(); // Impede o envio real
    
    // Mostra o teu Toast de sucesso
    toastBootstrap.show();
    
    // Opcional: Limpar o formulário após o sucesso
    form.reset();
    form.classList.remove('was-validated');
    return;
  }

  // 3. Adiciona a classe do Bootstrap que mostra os erros visualmente
  form.classList.add('was-validated');
}, false);


