// Get all question elements
const questions = document.querySelectorAll('.quest');

// Add click event listeners to each question
questions.forEach(question => {
  const textbox = question.querySelector('.textbox');
  const icon = question.querySelector('i');
  
  question.addEventListener('click', () => {
    // Toggle the "open" class on the question and answer
    question.classList.toggle('open');
    textbox.classList.toggle('open');
    icon.classList.toggle('open');
  });
});
