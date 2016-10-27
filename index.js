var AWS = require('aws-sdk');
AWS.config.region = 'ap-southeast-2';
var lambda = new AWS.Lambda();

console.log('loading Lambda HTML');

exports.handler = function(event, context) {
    
      var params = {
          FunctionName: 'login-demo', // the lambda function we are going to invoke
	      InvocationType: 'RequestResponse',
	          LogType: 'Tail',
		      Payload: '{}'
		        };
			  
			    var htmls = '<!DOCTYPE html><html lang="en"> <head> <meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1"> <meta name="description" content=""> <meta name="author" content=""> <link rel="icon" href="../../favicon.ico"> <title>Blog Template for Bootstrap</title> <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"> <link href="../../assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet"> <link href="blog.css" rel="stylesheet"> <style>/* * Globals */body{font-family: Georgia, "Times New Roman", Times, serif; color: #555;}h1, .h1,h2, .h2,h3, .h3,h4, .h4,h5, .h5,h6, .h6{margin-top: 0; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-weight: normal; color: #333;}/* * Override Bootstraps default container. */@media (min-width: 1200px){.container{width: 970px;}}/* * Masthead for nav */.blog-masthead{background-color: #428bca; -webkit-box-shadow: inset 0 -2px 5px rgba(0,0,0,.1); box-shadow: inset 0 -2px 5px rgba(0,0,0,.1);}/* Nav links */.blog-nav-item{position: relative; display: inline-block; padding: 10px; font-weight: 500; color: #cdddeb;}.blog-nav-item:hover,.blog-nav-item:focus{color: #fff; text-decoration: none;}/* Active state gets a caret at the bottom */.blog-nav .active{color: #fff;}.blog-nav .active:after{position: absolute; bottom: 0; left: 50%; width: 0; height: 0; margin-left: -5px; vertical-align: middle; content: " "; border-right: 5px solid transparent; border-bottom: 5px solid; border-left: 5px solid transparent;}/* * Blog name and description */.blog-header{padding-top: 20px; padding-bottom: 20px;}.blog-title{margin-top: 30px; margin-bottom: 0; font-size: 60px; font-weight: normal;}.blog-description{font-size: 20px; color: #999;}/* * Main column and sidebar layout */.blog-main{font-size: 18px; line-height: 1.5;}/* Sidebar modules for boxing content */.sidebar-module{padding: 15px; margin: 0 -15px 15px;}.sidebar-module-inset{padding: 15px; background-color: #f5f5f5; border-radius: 4px;}.sidebar-module-inset p:last-child,.sidebar-module-inset ul:last-child,.sidebar-module-inset ol:last-child{margin-bottom: 0;}/* Pagination */.pager{margin-bottom: 60px; text-align: left;}.pager > li > a{width: 140px; padding: 10px 20px; text-align: center; border-radius: 30px;}/* * Blog posts */.blog-post{margin-bottom: 60px;}.blog-post-title{margin-bottom: 5px; font-size: 40px;}.blog-post-meta{margin-bottom: 20px; color: #999;}/* * Footer */.blog-footer{padding: 40px 0; color: #999; text-align: center; background-color: #f9f9f9; border-top: 1px solid #e5e5e5;}.blog-footer p:last-child{margin-bottom: 0;}</style> <script src="../../assets/js/ie-emulation-modes-warning.js"></script> </head> <body> <div class="blog-masthead"> <div class="container"> <nav class="blog-nav"> <a class="blog-nav-item active" href="#">Home</a> <a class="blog-nav-item" href="#">New features</a> <a class="blog-nav-item" href="#">Press</a> <a class="blog-nav-item" href="#">New hires</a> <a class="blog-nav-item" href="#">About</a> </nav> </div></div><div class="container"> <div class="blog-header"> </div><div class="row"> <div class="col-sm-8 blog-main"> <div class="blog-post"> <h2 class="blog-post-title">Competition Form</h2> <p>This blog post shows a few different types of content thats supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p><hr> </div></div><div class="col-sm-3 col-sm-offset-1 blog-sidebar">';
			      var htmle = '<div class="sidebar-module"> <h4>Archives</h4> <ol class="list-unstyled"> <li><a href="#">March 2014</a></li><li><a href="#">February 2014</a></li><li><a href="#">January 2014</a></li><li><a href="#">December 2013</a></li><li><a href="#">November 2013</a></li><li><a href="#">October 2013</a></li><li><a href="#">September 2013</a></li><li><a href="#">August 2013</a></li><li><a href="#">July 2013</a></li><li><a href="#">June 2013</a></li><li><a href="#">May 2013</a></li><li><a href="#">April 2013</a></li></ol> </div><div class="sidebar-module"> <h4>Elsewhere</h4> <ol class="list-unstyled"> <li><a href="#">GitHub</a></li><li><a href="#">Twitter</a></li><li><a href="#">Facebook</a></li></ol> </div></div></div></div><footer class="blog-footer"> <p>Blog template built for <a href="http://getbootstrap.com">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p><p> <a href="#">Back to top</a> </p></footer><!-- Bootstrap core JavaScript==================================================--> <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> </body></html>';

			        
				 
				   
				     lambda.invoke(params, function(err, data) {
				         if (err) {
					       context.succeed(htmls +  htmle);
					           } else {
						         context.succeed(htmls + JSON.parse(data.Payload) + htmle);
							     }
							       })
							         
								 };
