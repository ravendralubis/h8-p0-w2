// 1.
for(var baris1 = 1; baris1 <= 5; baris1++) {
    console.log('*');
}

// 2.
for(var baris2 = 1; baris2 <= 5; baris2++) {
    var line2 = '';
    for(var kolom2 = 1; kolom2 <= 5; kolom2++) {
        line2 = line2 + '*';
    }
    console.log(line2);
}


// 3.
for(var baris3 = 1; baris3 <= 5; baris3++) {
    var line3 = '';
    for(var kolom3 = 1; kolom3 <= baris3; kolom3++) {
        line3 = line3 + '*';
    }
    console.log(line3);
}

