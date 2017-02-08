/**
 * Created by 明明 on 2017/2/8.
 */

var Api = {
    /**
     *用来拆分参数
     * */
    toQueryString:function(obj){
        return obj ? Object.keys(obj).sort().map(function (key) {
                var val = obj[key];
                if (Array.isArray(val)) {
                    return val.sort().map(function (val2) {
                        return key + '=' + val2;
                    }).join('&');
                }
                return key + '=' + val;
            }).join('&') : '';
    },

    /***
     * get请求
     */
    getRequest:function(url,params){
        var isOk;
        return new Promise((resolve,reject)=>{
            fetch(url +this.toQueryString(params),{
                method: 'get',
                headers: {
                    'Accept': '*/*',
                    'encoding':'UTF-8',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }).then((response) => {
                if (response.ok) {
                    isOk = true;
                } else {
                    isOk = false;
                }
                return response.json();
            }).then((responseData) => {
                    if (isOk) {
                        //console.log('请求完成之后：',responseData);
                        resolve(responseData);
                    }else {
                        reject(responseData);
                    }
                })
            .catch((error) => {
                reject(error);
            });
        })
    },

    postRequest:function(url,body){
        var isOk;
        console.log("请求:",url + this.toQueryString(body));
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'post',
                headers: {
                    'Accept': '*/*',
                    'encoding':'UTF-8',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body:this.toQueryString(body),
            }).then((response) => {
                if (response.ok) {
                    isOk = true;
                } else {
                    isOk = false;
                }
                return response.json();
            }).then((responseData) => {
                if (isOk) {
                    console.log('请求完成之后：',responseData);
                    if(responseData.code == '200'){
                        resolve(responseData);
                    }else{
                        reject(responseData);
                    }
                }else {
                    reject(responseData);
                }
            }).catch((error) => {
                reject(error);
            });
        })
    }
}

module.exports = Api;