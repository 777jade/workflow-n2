// src/employees/hire.js
function hireEmployee(employeeData) {
    const start = Date.now(); // Inicia o cronômetro

    console.log(`Contratando funcionário ${employeeData.name}...`);
    
    // Simula o tempo de execução (aqui você pode adicionar a lógica real de contratação)
    setTimeout(() => {
        console.log(`Funcionário ${employeeData.name} contratado!`);
        
        const end = Date.now(); // Captura o tempo após a execução
        console.log(`Tempo de execução: ${end - start}ms`); // Exibe o tempo de execução

    }, 1000); // Simula um tempo de 1 segundo para "contratar" o funcionário
}

module.exports = hireEmployee;
