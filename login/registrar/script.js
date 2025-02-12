let monthSelect = document.getElementById('month');
let daySelect = document.getElementById('day');
let yearSelect = document.getElementById('year');
let submitButton = document.getElementById('submit-button');
let termsAgree = document.getElementById('agree-terms');

let months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

let daysInMonth = (month, year) => new Date(year, month, 0).getDate();

let populateYears = () => {
    let currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
        let option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
};

let populateMonths = () => {
    months.forEach((month, index) => {
        let option = document.createElement('option');
        option.value = index + 1;
        option.textContent = month;
        monthSelect.appendChild(option);
    });
};

let populateDays = (month, year) => {
    daySelect.innerHTML = '<option value="">Dia</option>';
    let days = daysInMonth(month, year);
    for (let day = 1; day <= days; day++) {
        let option = document.createElement('option');
        option.value = day;
        option.textContent = day;
        daySelect.appendChild(option);
    }
};

monthSelect.addEventListener('change', () => {
    let selectedMonth = monthSelect.value;
    let selectedYear = yearSelect.value;
    if (selectedMonth && selectedYear) {
        populateDays(selectedMonth, selectedYear);
    }
});

yearSelect.addEventListener('change', () => {
    let selectedMonth = monthSelect.value;
    let selectedYear = yearSelect.value;
    if (selectedMonth && selectedYear) {
        populateDays(selectedMonth, selectedYear);
    }
});

termsAgree.addEventListener('change', () => {
    submitButton.disabled = !termsAgree.checked;
});

populateMonths();
populateYears();

document.getElementById('registration-form').addEventListener('submit', function(event) {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        event.preventDefault();
    }
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let errorSpan = document.getElementById('error-message');

    if (!name || !password || !confirmPassword) {
        errorSpan.textContent = 'Todos os campos devem ser preenchidos.';
        errorSpan.style.display = 'block';
        event.preventDefault();
    } else if (password.length < 6) {
        errorSpan.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        errorSpan.style.display = 'block';
        event.preventDefault();
    } else if (password !== confirmPassword) {
        errorSpan.textContent = 'As senhas não coincidem.';
        errorSpan.style.display = 'block';
        event.preventDefault();
    } else {
        errorSpan.style.display = 'none';
    }
});