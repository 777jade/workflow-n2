// src/recruitment/jobPostings.js
function createJobPosting(jobDetails) {
    const start = Date.now(); // Inicia o cronômetro

    console.log(`Criando vaga para ${jobDetails.title}...`);
    
    // Simula o tempo de execução (aqui você pode adicionar a lógica real de criação de vaga)
    setTimeout(() => {
        console.log(`Vaga ${jobDetails.title} criada!`);
        
        const end = Date.now(); // Captura o tempo após a execução
        console.log(`Tempo de execução: ${end - start}ms`); // Exibe o tempo de execução

    }, 1000); // Simula um tempo de 1 segundo para criar a vaga
}

module.exports = createJobPosting;
