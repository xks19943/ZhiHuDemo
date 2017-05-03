/**
 * Created by 明明 on 2017/2/8.
 */
import Api from '../network/Api'
var Model = {
    /**
     * 获取最新新闻
     * @returns {Promise}
     */
    lastestNew(){
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
    },

    /***
     * 获取某日新闻
     * @param date
     * @returns {Promise}
     */
    beforeNew(date){
       return new Promise((resolve,reject)=> {
           var url = 'http://news-at.zhihu.com/api/4/news/before/'+date;
           Api.getRequest(url, '').then((data) => {
               if (!data || data == null) {
                   reject(data);
                   return;
               }
               resolve(data);
           }).catch((e) => {

           })
       })
    },

    /**
     * 获取新闻详情
     * @param id
     * @returns {Promise}
     */
    newsDetail(id){
        return new Promise((resolve,reject)=> {
            var url = 'http://news-at.zhihu.com/api/4/news/'+id;
            Api.getRequest(url, '').then((data) => {
                if (!data || data == null) {
                    reject(data);
                    return;
                }
                resolve(data);
            }).catch((e) => {

            })
        })
    },
}

export default Model;