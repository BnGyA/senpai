 /**
  * EasyHTTP Library
  * Library to make HTTP requests easier
  * @version 3.0.0
  * @author BenjaminRochez
  * @licence MIT
  */

 class EasyHTTP {
    // Make an HTTP GET Request  
    async get(url){
        const res = await fetch(url);
        const resData = await res.json();
        return resData;
    }

    // Make a POST Request
    async post(url, data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json();
        return resData;
    }
}

