for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 4 == 0) {

        console.log('Bish-Bosh\n');
    } else if (i % 3 == 0) {
        console.log('Bish\n');

    } else if (i % 4 == 0) {

        console.log('Bosh\n');
    } else {
        console.log(i);

    }

}



let resultButton = document.getElementById("btn");
let txt  = document.getElementById("finalResult");
let txtResult =[];
resultButton.addEventListener("click", result);

function result() {
    let n = document.getElementById("nNumber").value;
    let bish = document.getElementById("bishNumber").value;
    let bosh = document.getElementById("boshNumber").value;
    txtResult[n]="";
    for (let i = 1; i <= n; i++) {
        if (i % bish == 0 && i % bosh == 0) {
            txtResult[i-1] = ('Bish-Bosh ');
            console.log('Bish-Bosh ');
        } else if (i % bish == 0) {
            txtResult[i-1] = ('Bish ')
            console.log('Bish ');

        } else if (i % bosh == 0) {
            txtResult[i-1] = ('Bosh ')
            console.log('Bosh ');
        } else {
            txtResult[i-1] = (i+" ")
            console.log(i);
        }
    }
    txt.textContent = txtResult;
};