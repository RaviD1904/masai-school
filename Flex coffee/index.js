var r=3
var c=3
var mat=[[6,8,10],[2,3,9],[7, 4, 5,]]

var rm=Math.floor(r/2)
var cm=Math.floor(c/2)
var sum1=0
var sum2=0
for(var i=c-1;i>cm;i--){
    console.log(mat[0][i])
    sum1=sum1+mat[0][i]
    }
for(var i=0;i<r-1;i++){
    console.log(mat[i][cm])
    sum1=sum1+mat[i][cm]
}
for(var i=cm;i>=0;i--){
    console.log(mat[0][i])
    sum1=sum1+mat[r-1][i]
}



for(var i=0;i<c;i++){
    sum2=sum2+mat[rm][i]
    console.log(mat[rm][i])
}

for(var i=r-1; i>rm;i--){
    sum2=sum2+mat[i][c-1]
    console.log(mat[i][c-1]);
}
for(var i=0; i<cm-1;i++){
    sum2=sum2+mat[i][0]
    console.log(mat[i][0]);
}

console.log(Math.abs(sum1-sum2))