const prompt= require("prompt")

prompt.start()

prompt.get('color', function(err, result){
    if (err){
        return onerror(err);
    }
    console.log("Did you say:" + result.color);
})