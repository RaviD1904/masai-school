async function getData(url){

    try{
        let res=await fetch(url)
        let data=await res.json()
        return data
    }
    catch(err){
        console.log(err)
    }
}

export default getData