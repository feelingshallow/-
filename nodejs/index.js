const http=require('http')
const url=require('url')
const querystring=require('querystring')
const fs=require('fs')
let user={
    admin:123456
}
http.createServer((req,res)=>{

    let path,get,post
    if (req.method==='GET'){
        let {pathname,query}=url.parse(req.url,true)
        path=pathname
        get=query
        complete()
    }else {
        let arr=[]
        req.on('data',buffer=>{
                arr.push(buffer)
        })
        req.on('end',()=>{
          post=  querystring.parse(Buffer.concat(arr).toString())
        })

        complete()
    }
    function complete() {
        if (path=='/login'){
            res.writeHead(200,{
                "Content-Type":'text/plain;charset=utf-8',
                'Access-Control-Allow-Credentials': 'true',     // 后端允许发送Cookie
                'Access-Control-Allow-Origin': 'http://localhost:63342',    // 允许访问的域（协议+域名+端口）
                'Set-Cookie': 'l=a123456;Path=/;Domain=www.demo2.com;HttpOnly'   // HttpOnly:脚本无法读取cookie
            })

            let {username,password}=get
            if (!user[username]){
                res.end(JSON.stringify({
                    err:1,
                    msg:'用户名不存在'
                }))
            }else if (user[username]!=password){
                res.end(JSON.stringify({
                    err:1,
                    msg:'密码错误'
                }))
            }else {
                res.end(JSON.stringify({
                    err:0,
                    msg:'登录成功'
                }))
            }
        } else if (path=='/reg'){
       let {username,password}=post
            if (user[username]){
                res.end(JSON.stringify({
                    err:1,
                    msg:'账户已存在'
                }))
            }
        }
    }
}).listen(8080)
