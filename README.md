# neu_pu
power usage in northeastern university interface 

Set up a REST interface for Mongo using [Sleepy.Mongoose](http://www.kchodorow.com/blog/2010/02/22/sleepy-mongoose-a-mongodb-rest-interface/) and connect it to the PowerDB
###
install mongodb python driver with `easy_install pymongo`

download [Sleepy.Mongoose](https://github.com/10gen-labs/sleepy.mongoose)

From the mongoose directory, run `python httpd.py`

ping the sleepy.mongoose to make sure it's awake with `curl 'http://localhost:27080/_hello'`

connect to mongodb with curl: `curl --data server=localhost:27016 'http://localhost:27080/_connect'`

example: `curl -X GET 'http://localhost:27080/pudb/sitedb/_find`

example: `http://localhost:27080/pudb/buildingdb/_find`

sleepy.mongoose documentation [here](http://www.kchodorow.com/blog/2010/02/22/sleepy-mongoose-a-mongodb-rest-interface/)

