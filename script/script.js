document.addEventListener('DOMContentLoaded', function() {
    const amountInput = document.getElementById('amount');
    const originalAmountSpan = document.getElementById('originalAmount');
    const taxAmountSpan = document.getElementById('taxAmount');
    const totalAmountSpan = document.getElementById('totalAmount');
    const payButton = document.getElementById('payButton');
    const thankYouMessage = document.getElementById('thankYouMessage');
    
    // Calcular impuesto y total cuando cambia el monto
    amountInput.addEventListener('input', function() {
        const amount = parseFloat(amountInput.value) || 0;
        const taxRate = 0.10; // 10% de impuesto
        const tax = amount * taxRate;
        const total = amount + tax;
        
        // Actualizar los valores en la interfaz
        originalAmountSpan.textContent = amount.toFixed(2);
        taxAmountSpan.textContent = tax.toFixed(2);
        totalAmountSpan.textContent = total.toFixed(2);
    });
    
    // Mostrar mensaje de agradecimiento al hacer clic en "Pagar"
    payButton.addEventListener('click', function() {
        // Ocultar el formulario y mostrar el mensaje de agradecimiento
        document.querySelector('form').style.display = 'none';
        thankYouMessage.classList.remove('hidden');
        
        // Opcional: Deshabilitar el botón después de hacer clic
        payButton.disabled = true;
    });
});
