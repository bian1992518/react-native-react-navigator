const util = {
	httpRequest : ( url , method , data ) => {
		return fetch(url,{
			method : method,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
            body : JSON.stringify(data)
		})
	    .then((response) => response.json())
	    .then((responseJson) => {
	        return responseJson;
	    })
	    .catch((error) => {
	        console.error(error);
	    });
	}
}


module.exports = util;