document.querySelectorAll('.app-card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`You clicked on ${card.id}`);
    });
});

document.getElementById('backtest-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Implement form submission logic and result display
    alert('Backtest submitted');
});

document.getElementById('download-pdf').addEventListener('click', function () {
    alert('Download PDF');
});
