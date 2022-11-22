/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let aArr = a.split("");
    let bArr = b.split("");
    // let maxLen = aArr.length
    // let maxLen = bArr.length > aArr.length ? bArr.length : aArr.length;

    let count = 0;
    // a = 110010
    if (bArr.length > aArr.length) {
        let diff = bArr.length - aArr.length;
        while (count < diff) {
            aArr.unshift("0");
            count++;
        }
    }

    // b =
    if (bArr.length < aArr.length) {
        let diff = aArr.length - bArr.length;
        while (count < diff) {
            bArr.unshift("0");
            count++;
        }
    }
    // console.log(aArr);
    // console.log(bArr);

    let newArr = [];
    let carryOver = 0;
    for (let i = bArr.length; i >= 0; i--) {
        // console.log(newArr);
        if (carryOver === 0) {
            if (aArr[i] === "1" && bArr[i] === "1") {
                newArr.unshift(0);
                carryOver = 1;
            } else if (aArr[i] === "0" && bArr[i] === "0") {
                newArr.unshift(0);
            }
            if (aArr[i] === "0" && bArr[i] === "1") {
                newArr.unshift(1);
            }
            if (aArr[i] === "1" && bArr[i] === "0") {
                newArr.unshift(1);
            }
        } else if (carryOver === 1) {
            if (aArr[i] === "0" && bArr[i] === "0") {
                newArr.unshift(1);
                carryOver = 0;
            } else if (aArr[i] === "0" && bArr[i] === "1") {
                newArr.unshift(0);
            } else if (aArr[i] === "1" && bArr[i] === "0") {
                newArr.unshift(0);
            } else if (aArr[i] === "1" && bArr[i] === "1") {
                newArr.unshift(1);
                // carryOver = 1;
            }
        }
    }
    if (carryOver) {
        newArr.unshift(1);
    }
    return newArr.join("");
};

console.log();