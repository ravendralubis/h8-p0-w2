1.
var hitung = 0;
console.log('LOOPING PERTAMA');

while (hitung <= 20) {
    console.log(hitung + '- I love coding');
    hitung = hitung + 2; 
}

hitung = 20;
console.log('LOOPING KEDUA');

while (hitung >= 2) {
    console.log(hitung + '- I will become fullstack developer')
    hitung = hitung -2;
}

2.
var operator = 0;
console.log('LOOPING PERTAMA');

for(var operator = 1; operator <= 20; operator++) {
    console.log(operator + '- I love coding');
}

console.log('LOOPING KEDUA');

for(var operator = 20; operator >= 1; operator--) {
    console.log(operator + '- I will become fullstack developer');
}

3.

for(var counter = 1; counter <= 100; counter++) {
    if(counter % 2 === 0) {
        console.log(counter + ' GENAP');
    } else if(counter % 2 ===1) {
        console.log(counter + ' GANJIL');
    }
}

for(counter = 1; counter <=100; counter += 2) {
    if(counter % 3 === 0) {
        console.log(counter + ' kelipatan 3');
    }
}

for(counter = 1; counter <= 100; counter += 5) {
    if(counter % 6 === 0) {
        console.log(counter + ' kelipatan 6');
    }
}

for(counter = 1; counter <=100; counter += 9) {
    if(counter % 10 === 0) {
        console.log(counter + ' kelipatan 10');
    }
}