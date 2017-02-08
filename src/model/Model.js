/**
 * Created by 明明 on 2017/2/8.
 */
import Api from '../network/Api'
var Model = {
    lastestNew:function(){
        return new Promise((resolve,reject)=>{
            var url = 'http://news-at.zhihu.com/api/4/news/latest';
            Api.getRequest(url,'').then((data)=>{
                if (!data || data == null) {
                    reject(data);
                    return;
                }
                resolve(data);
            }).catch((e)=>{

            })
        })
    }
}

module.exports = Model;