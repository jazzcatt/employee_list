
//   var MongoClient = require('mongodb').MongoClient;


function getData(req, res) {
	res.send('[{"name":"Alex","job":"Developer","date":"12/12/2015","rate":"10"},'+
			'{"name":"Hanna","job":"Seo & Founder","date":"12/10/2013","rate":"30"},'+
			'{"name":"Mike","job":"Developer","date":"11/12/2015","rate":"1"}]');
    
/*                     GET DATA FROM MONGO DB

MongoClient.connect('mongodb://localhost:27017/staff', function(err, db) {
  if (err) {
    throw err;
  }
  db.collection('employees').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    res.send(result);   // send gotten data
  });
});


*/

}

function addUser(req, res) {
		req.on("data",function(chunk){
		var data = chunk.toString();
				// db.collection('employees').insert(data, function(err){
		// if(err) handle error
		// res.send(200)  success insertind in data}
		res.sendStatus(200);
	})
}
exports.getData  = getData;
exports.addUser = addUser;

