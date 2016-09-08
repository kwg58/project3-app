# p3

Adrian,

I've been mucking with this for days and can't get it going.  This is an Angular app to serve as the front end of the Pokemonuments app we did for Project 3.  It's going to work with the Rails back end we put in place then.  

I started from scratch and build a new app.  All I'm trying to do now is display a list of monuments.  The HTML calls the Monuments controller, the Monuments controller asks the Monuments factory for the data, and the factory queries the back end and should send back an object containing the monuments.

I got the factory working, it gets the correct object from the back end, but for the life of me I haven't been able to send the object from the factory to the controller. If you can take a look at it and give me some help I'll be enormously grateful.

The controller lives in app/scripts/controllers/monuments-index.js.  
The factory lives in app/scripts/services/monuments.js.  
There's a service to perform the same task defined in app/scripts/services/monuments2.js.  I haven't been able to get that working either.  

Please take a look at it when you get a few minutes and see if you can put me on the right path.  

Thanks in advance,
Kevin  

P.S.  Now the factory's NOT working because I moved the function below the factory initiation and I get "GetMonuments was used before it was defined".  Can you tell me how to make that work?  









This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
