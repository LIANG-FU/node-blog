//将serializeArray格式化为想要的对象 
function serializeToJson(form){
    var result = {}
    var f = form.serializeArray()
    f.forEach(function(item){
        result[item.name] = item.value
    })
    return result
}