# Diagnostic Unit 2.1

### Question 1: What is the Request/Response Cycle?  How does it work?
	The first variable req attempts to recieve information from a given location. With that file location, it responds (res) with whatever we want it to do.

### Question 2: What are the differences between a GET request and a POST request?
	Get will retrieve information that is in a file we are getting from. Post will export the information we have assigned. 

### Question 3: What does `npm init` do?
	Creates a JSON file that will house information regarding our project, one of the more important things being the dependencies used.

### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?
	Create, Read, Update, Delete. 
	Post, Get, ?, Delete.
	
### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?  
	app.get

### Question 6: If the following form was submitted, what would `action="myScript.js"` do?

```
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```
This would put the information into wherever the js is telling it to put it. Not too certain though.

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`
	router.post('/menus', function(req, res) {
		res.render('/homepage', {
			post: post
			});
		});


### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

```
app.get("/artist/:id/song/:song_id"), function(req, res){
	var id = data.id[req.params.id];
	var songId = data.song_id[req.params.id];
}
```

### Question 9: What is MVC? How have we been using it so far?
	Model View Controller.
	We use it to stay more organized in templating. I believe a similar set up was used in our stop watch exercise but all in the same file.
## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}
I don't know how to do this without referencing the internet 
 ________
< BOOooo >
 --------
        \   ^__^
         \  (--)\_______
            (__)\       )\/\
                ||----w |
                ||     ||







	




