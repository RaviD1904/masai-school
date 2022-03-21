var n=10
var k=3
var arr=[-1 ,-1, -2, 1, -2, 4 ,1 ,9 ,3 ,9]
maxarry(n,k,arr)
function maxarry(n,k,arr){
    var smax=-Infinity
    
    for(var i=0;i<n;i++){
        var sum=0
        var count=1
        for(var j=i;j<n;j++){
            
            while(count<=k){
                sum=sum+arr[j]
                count++
            }
            break;
            
        }
        smax=Math.max(smax,sum)
        // if(sum>smax){
        //         smax=sum
        //     }
    }
    console.log(smax)
}