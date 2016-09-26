// var Instafeed = require("instafeed.js");


 var userFeed = new Instafeed({
 get: 'user',
 target: 'instafeed',
 userId: 1355396613,
 accessToken: '1355396613.ff351b0.8bbfbcd309e241a39c458a07a7e374a9',
 resolution: 'thumbnail',
 limit: 30
 });
 userFeed.run();


// <script type="text/javascript">
//  var feed = new Instafeed({
//  get: 'tagged',
//  tagName: 'awesome',
//  clientId: 'YOUR_CLIENT_ID',
//  template: '<a href="{{link}}"><img src="{{image}}" /></a>'
//  });
//  feed.run();
// </script>
