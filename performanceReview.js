// src/performance/performanceReview.js
function performReview(employeeId, reviewData) {
    const start = Date.now(); // Inicia o cronômetro

    console.log(`Realizando avaliação de desempenho para o funcionário ${employeeId}...`);
    
    // Simula o tempo de execução (aqui você pode adicionar a lógica real da avaliação de desempenho)
    setTimeout(() => {
        console.log(`Avaliação de desempenho para o funcionário ${employeeId} concluída!`);
        
        const end = Date.now(); // Captura o tempo após a execução
        console.log(`Tempo de execução: ${end - start}ms`); // Exibe o tempo de execução

    }, 1000); // Simula um tempo de 1 segundo para realizar a avaliação
}

module.exports = performReview;
