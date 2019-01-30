var nama = '';
var peran = '';

if (nama === '' && peran === '') {
    console.log('Nama harus diisi');
} else if (nama && peran === '') {
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!')
} else if (nama && peran === 'Ksatria') {
    console.log('Selamat Datang di Dunia Proxytia, ' + nama);
    console.log('Halo ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (nama && peran === 'Tabib') {
    console.log('Selamat Datang di Dunia Proxytia, ' + nama);
    console.log('Halo tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
} else if (nama && peran === 'Penyihir') {
    console.log('Selamat Datang di Dunia Proxytia, ' + nama);
    console.log('Halo tabib ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
}