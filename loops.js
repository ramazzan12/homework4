

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let arr="";
    for (let i = 0; i < s.length; i++){
        if (s[i]=='a' || s[i]=='e' || s[i]=='i' ||s[i]=='o' ||s[i]=='u'){
            console.log(s[i]);
        }
        else {
            arr=arr+s[i];
        }
    }    
    for (let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

