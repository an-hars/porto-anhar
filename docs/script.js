// --- LOGIKA ANIMASI KETIK (TYPING ANIMATION) ---

const dataText = [
    "Software Engineer.",
    "Full Stack Developer.",
    "Mobile Enthusiast.",
    "Problem Solver."
];

const typingTextElement = document.getElementById('typing-text');

let dataIndex = 0; // Indeks array dataText
let charIndex = 0; // Indeks karakter dalam string saat ini

// Fungsi untuk mengetik teks
function type() {
    const currentText = dataText[dataIndex];
    
    if (charIndex < currentText.length) {
        typingTextElement.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Kecepatan mengetik
    } else {
        // Selesai mengetik, tunggu sebentar lalu mulai menghapus
        setTimeout(erase, 2500); 
    }
}

// Fungsi untuk menghapus teks
function erase() {
    const currentText = dataText[dataIndex];
    
    if (charIndex > 0) {
        // Hapus satu karakter terakhir
        typingTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Kecepatan menghapus
    } else {
        // Selesai menghapus, pindah ke string berikutnya
        dataIndex = (dataIndex + 1) % dataText.length; // Loop kembali ke awal jika sudah mencapai akhir
        setTimeout(type, 500); // Jeda sebelum mulai mengetik yang baru
    }
}

// Fungsi Download Resume terpusat
function handleResumeDownload() {
    // URL file resume Anda. GANTI URL INI dengan tautan resume PDF yang sebenarnya.
    const resumeUrl = 'path/to/your/resume.pdf'; 
            
    // Membuat elemen anchor sementara
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'YourName_Resume.pdf'; // Nama file yang akan diunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Opsional: berikan umpan balik visual
    console.log('Memicu pengunduhan resume...');
}


// Mulai animasi setelah DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Memberi jeda sebentar sebelum animasi dimulai
    setTimeout(type, 1000); 

    // --- LOGIKA DOWNLOAD RESUME ---
    const downloadButtonDesktop = document.getElementById('downloadResumeButton');
    const downloadButtonMobile = document.getElementById('downloadResumeButtonMobile'); // ID baru

    // Menghubungkan event listener ke tombol desktop
    if (downloadButtonDesktop) {
        downloadButtonDesktop.addEventListener('click', handleResumeDownload);
    }
    
    // Menghubungkan event listener ke tombol mobile
    if (downloadButtonMobile) {
        downloadButtonMobile.addEventListener('click', handleResumeDownload);
    }
});
