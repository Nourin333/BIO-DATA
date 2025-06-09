// Optional keyboard focus effect on skills for accessibility 
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
  skill.addEventListener('focus', () => {
    skill.style.transform = 'scale(1.1)';
    skill.style.backgroundColor = 'var(--color-yellow)';
  });
  skill.addEventListener('blur', () => {
    skill.style.transform = 'scale(1)';
    skill.style.backgroundColor = '';
  });
});
