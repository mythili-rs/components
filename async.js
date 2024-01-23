//async dummy example
/*async function asAw(){
    var promise = new Promise(
        function(response){
            setTimeout(function(){
                response("Example for asyns/await")
            },1000)
        }
    )  
    console.log(await promise) 
}

asAw()*/

//Kind of instagram example
async function commentcode(){
    return new Promise(
        function(commentvalue){
            setTimeout(function(){
            commentvalue("This is my first post comment icon")
            },2000)
        }

    )
}
async function likecode(){
    return new Promise(
        function(likevalue){
            setTimeout(function(){
            likevalue("This is my first like icon")
            },2000)
        }
        )
}
async function sharecode(){
    return new Promise(
        function(promisevalue){
            setTimeout(function(){
                promisevalue("This is my first share icon")
            },1000)
        })
    
}
async function post(){
    let post = new Promise(
        function(postresponse){
        setTimeout(function(){
            postresponse("This is my first post")
        },2000)
    }
    )

    var [feed,comment,like,share] = await Promise.all([post,commentcode(),likecode(),sharecode()])
    console.log(feed)
    console.log(comment)
    console.log(like)
    console.log(share)
}
post()
commentcode()
likecode()
sharecode()
