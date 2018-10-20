/* 
    -Task no. : 1
    -Task Description: A function that gets user id and returns his posts with their comments in one JSON object
    -Author: Ali Abdulkareem Shamit
*/

// A function receives accepts user id and send back his posts with their comments int one json object
function getDetails(userId) {

    var postDetails = {}                                                        // An object to all details
    var postId = [], postTitle = [], postBody = [], postBody = []               // Arrays to store post's details    
    var commentId = [], commentName = [], commentEmail = [], commentBody = []   // Arrays to store comment's details
    
    // Make an ajax request to get post's information withen givin api and user id
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts?userId='+userId,
        method: 'GET',
        data: {}, //data sent by ajax
        success: function (posts) {
            // loop throw retreived posts data and store their values into arrays
            for (let i = 0; i < posts.length; i++) {
                postId[i] = posts[i].id;
                postTitle[i] = posts[i].title;
                postBody[i] = posts[i].body;
            }
            // Make a second ajax request to get every post's comments withen givin api and post id
            for (let i = 0; i < postId.length; i++) {
                $.ajax({
                    url: 'https://jsonplaceholder.typicode.com/comments?postId=' + postId[i],
                    method: 'GET',
                    success: function (comments) {
                        // loop throw retreived comments and store their details into arrays
                        for (let i = 0; i < comments.length; i++) {
                            commentId[i] = comments[i].id;
                            commentName[i] = comments[i].name;
                            commentEmail[i] = comments[i].email;
                            commentBody[i] = comments[i].body;
                        }
                    }
                })
            }      
        },
        // if there is an error, print it in console
        error: function (err) {
            console.log(err)
        }
    })
    // Make a json object to store all retreived data
    postDetails = {
        "userId": userId,
        "posts": {
            "postId": postId,
            "postTitle": postTitle,
            "postBody": postBody,
            "comments": {
                "commentId": commentId,
                "commentName": commentName,
                "commentEmail": commentEmail,
                "commentBody": commentBody
            }
        }
    }
    // print the json object in the console
    console.log(postDetails)  
}

getDetails(1);