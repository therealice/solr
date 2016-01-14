var myFirebaseRef = new Firebase("https://solr.firebaseio.com/");

myFirebaseRef.child("").on("value", function(snapshot) {
    console.log(snapshot.val());
});