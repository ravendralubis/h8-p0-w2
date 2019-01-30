var hari = 17;
var bulan = 8;
var tahun = 1945;

switch (true)  {
    case (hari >=1 && hari <=31 && tahun >= 1900 && tahun <=2200 && bulan === 1):
        bulan = 'Januari'
        console.log (hari + ' ' + bulan + ' ' + tahun);
        break;
    case (hari >=1 && hari <=31 && tahun >= 1900 && tahun <=2200 && bulan === 2):
        bulan = 'Februari'
        console.log (hari + ' ' + bulan + ' ' + tahun);
        break;
    case (hari >=1 && hari <=31 && tahun >= 1900 && tahun <=2200 && bulan === 3):
        bulan = 'Maret'
        console.log (hari + ' ' + bulan + ' ' + tahun);
        break;
    case (hari >=1 && hari <=31 && tahun >= 1900 && tahun <=2200 && bulan === 4):
        bulan = 'April'
        console.log (hari + ' ' + bulan + ' ' + tahun);
        break;
    case (hari >=1 && hari <=31 && tahun >= 1900 && tahun <=2200 && bulan === 5):
        bulan = 'Mei'
        console.log (hari + ' ' + bulan + ' ' + tahun);
        break;
    case (hari >=1 && hari <=31 && tahun >= 1900 && tahun <=2200 && bulan === 6):
        bulan = 'Juni'
        console.log (hari + ' ' + bulan + ' ' + tahun);
        break;
    case (hari >=1 && hari <=31 && tahun >= 1900 && tahun <=2200 && bulan === 7):
        bulan = 'Juli'
        console.log (hari + ' ' + bulan + ' ' + tahun);
        break;
    case (hari >=1 && hari <=31 && tahun >= 1900 && tahun <=2200 && bulan === 8):
        bulan = 'Agustus'
        console.log (hari + ' ' + bulan + ' ' + tahun);
        break;
    case (hari >=1 && hari <=31 && tahun >= 1900 && tahun <=2200 && bulan === 9):
        bulan = 'September'
        console.log (hari + ' ' + bulan + ' ' + tahun);
        break;
    case (hari >=1 && hari <=31 && tahun >= 1900 && tahun <=2200 && bulan === 10):
        bulan = 'Oktober'
        console.log (hari + ' ' + bulan + ' ' + tahun);
        break;
    case (hari >=1 && hari <=31 && tahun >= 1900 && tahun <=2200 && bulan === 11):
        bulan = 'November'
        console.log (hari + ' ' + bulan + ' ' + tahun);
        break;
    case (hari >=1 && hari <=31 && tahun >= 1900 && tahun <=2200 && bulan === 12):
        bulan = 'Desember'
        console.log (hari + ' ' + bulan + ' ' + tahun);
        break;
    default:
        console.log('Masukkan tanggal, bulan dan tahun dengan benar');
        break;
}
