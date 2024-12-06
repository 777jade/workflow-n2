// src/benefits/assignBenefits.js
function assignBenefits(employeeId, benefits) {
    const start = Date.now(); // Inicia o cronômetro

    console.log(`Atribuindo benefícios para o funcionário ${employeeId}...`);
    
    // Simula o tempo de execução (aqui você pode adicionar a lógica real de atribuição de benefícios)
    setTimeout(() => {
        console.log(`Benefícios ${benefits.join(', ')} atribuídos ao funcionário ${employeeId}!`);
        
        const end = Date.now(); // Captura o tempo após a execução
        console.log(`Tempo de execução: ${end - start}ms`); // Exibe o tempo de execução

    }, 1000); // Simula um tempo de 1 segundo para atribuir os benefícios
}

module.exports = assignBenefits;
