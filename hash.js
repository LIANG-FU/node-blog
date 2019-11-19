// 导入bcrypt
const bcrypt = require('bcrypt')


async function run(){
    // 生成随机字符串
    // genSalt方法接收一个数值作为参数
    // 数值越大，生成的随机字符串复杂的越高
    // 数值越低，生成的随机字符串复杂度越低
    // 默认值是10
    // 返回生成的随机字符串
    let salt = await bcrypt.genSalt(10);
    // 对密码进行加密
    // 1.要加密的明文
    // 2.随机字符串
    // 返回加密之后的密码
    const result = await bcrypt.hash("123",salt)
    console.log(result)
}
run()
