// js/script.js
// Memanggil fungsi welcomeSpeech saat halaman dimuat
welcomeSpeech();

function welcomeSpeech() {
    /// Pop up prompt Untuk menanyakan nama user
    let name = prompt('Enter your name:');

    // Menampilkan pesan sambutan dengan nama user
    document.getElementById('greet-name').innerHTML = `hai ${name}, `;
    // alert('Welcome to My Portfolio Website!');
}

function validateForm() {
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    if (name === '' || email === '' || message === '') {
        alert('Gagal mengirim pesan! isi semua form untuk melanjutkan.');
    } else {
        alert(`Terima Kasih ${name} Telah Mengirim Pesan!`);
    }
}
