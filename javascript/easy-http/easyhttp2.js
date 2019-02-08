 /**
  * EasyHTTP Library
  * Library to make HTTP requests easier
  * @version 2.0.0
  * @author BenjaminRochez
  * @licence MIT
  */

class EasyHTTP {
    // Make an HTTP GET Request  
    get(url){
        return new Promise((resolve, reject)=>{
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }

    // Make an HTTP POST Request  
    post(url){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }
}

