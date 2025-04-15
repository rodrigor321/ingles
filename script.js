function checkAnswer(answer) {
    const successMessage = document.getElementById('successMessage');
    
    if (answer === 'correct') {
        successMessage.style.display = 'block';
        setTimeout(() => {
            const currentPage = window.location.pathname.split('/').pop();
            let nextPage;

            if (currentPage === 'question1.html') {
                nextPage = 'question2.html';
            } else if (currentPage === 'question2.html') {
                nextPage = 'question3.html';
            } else if (currentPage === 'question3.html') {
                nextPage = 'question4.html';
            } else if (currentPage === 'question4.html') {
                nextPage = 'question5.html';
            } else if (currentPage === 'question5.html') {
                nextPage = 'question6.html';
            } else if (currentPage === 'question6.html') {
                nextPage = 'question7.html';
            } else {
                nextPage = 'result.html?result=correct'; 
            }

            window.location.href = nextPage;
        }, 2000); 
    } else {
        window.location.href = 'result.html?result=wrong'; 
    }
}
