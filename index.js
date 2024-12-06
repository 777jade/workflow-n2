// src/index.js
const hireEmployee = require('./employees/hire');
const createJobPosting = require('./recruitment/jobPostings');
const performReview = require('./performance/performanceReview');
const assignBenefits = require('./benefits/assignBenefits');

// Exemplo de execução do fluxo
function executeWorkflow() {
    // Criar uma nova vaga
    const jobDetails = { title: 'Desenvolvedor Backend', description: 'Vaga para backend.' };
    createJobPosting(jobDetails);

    // Contratar um novo funcionário
    const newEmployee = { name: 'João', position: 'Desenvolvedor', salary: 3000 };
    hireEmployee(newEmployee);

    // Realizar a avaliação de desempenho
    const reviewData = { score: 85, feedback: 'Bom desempenho.' };
    performReview(1, reviewData); // Simulando que o ID do funcionário seja 1

    // Atribuir benefícios
    const benefits = ['Plano de saúde', 'Vale alimentação'];
    assignBenefits(1, benefits); // Simulando o ID do funcionário sendo 1
}

executeWorkflow();
