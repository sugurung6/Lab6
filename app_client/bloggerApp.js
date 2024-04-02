// Define the AngularJS module
var app = angular.module('bloggerApp', ['ngRoute']);

// Configure routes using AngularJS router provider
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/blogList.html', // Template for blog list
        controller: 'BlogListController'
    })
    .when('/add', {
        templateUrl: 'views/addBlog.html', // Template for adding a blog
        controller: 'AddBlogController'
    })
    .when('/edit/:id', {
        templateUrl: 'views/editBlog.html', // Template for editing a blog
        controller: 'EditBlogController'
    })
    .when('/delete/:id', {
        templateUrl: 'app_client/views/deleteBlog.html',
        controller: 'DeleteBlogController'
    })
    .otherwise({
        redirectTo: '/' // Redirect to the home page if route not found
    });
}]);

// Define controllers
app.controller('BlogListController', ['$scope', 'BlogService', function($scope, BlogService) {
    // Implement controller logic for displaying blog list
    BlogService.getAllBlogs().then(function(response) {
        $scope.blogs = response.data;
    }).catch(function(error) {
        console.error('Error fetching blogs:', error);
    });
}]);

app.controller('AddBlogController', ['$scope', 'BlogService', function($scope, BlogService) {
    // Implement controller logic for adding a blog
    $scope.newBlog = {};

    // Function to add a new blog
    $scope.addBlog = function() {
        BlogService.addBlog($scope.newBlog).then(function(response) {
            // Clear form fields on successful addition
            $scope.newBlog = {};
            // Optionally, redirect to blog list page
        }).catch(function(error) {
            console.error('Error adding blog:', error);
        });
    };
}]);

app.controller('EditBlogController', ['$scope', '$routeParams', 'BlogService', function($scope, $routeParams, BlogService) {
    // Implement controller logic for editing a blog
    var blogId = $routeParams.id;

    // Fetch blog details by ID
    BlogService.getBlogById(blogId).then(function(response) {
        $scope.blog = response.data;
    }).catch(function(error) {
        console.error('Error fetching blog details:', error);
    });

    // Function to update blog
    $scope.updateBlog = function() {
        BlogService.updateBlog($scope.blog).then(function(response) {
            // Optionally, redirect to blog list page
        }).catch(function(error) {
            console.error('Error updating blog:', error);
        });
    };
}]);

// app_client/bloggerApp.js
app.controller('DeleteBlogController', ['$scope', '$routeParams', 'BlogService', function($scope, $routeParams, BlogService) {
    var blogId = $routeParams.id;

    // Fetch blog details by ID
    BlogService.getBlogById(blogId).then(function(response) {
        $scope.blog = response.data;
    }).catch(function(error) {
        console.error('Error fetching blog details:', error);
    });

    // Function to confirm blog deletion
    $scope.confirmDelete = function() {
        BlogService.deleteBlog(blogId).then(function(response) {
            // Optionally, redirect to blog list page
        }).catch(function(error) {
            console.error('Error deleting blog:', error);
        });
    };

    // Function to cancel blog deletion
    $scope.cancelDelete = function() {
        // Optionally, redirect to blog list page
    };
}]);


// Define AngularJS service for accessing REST API
app.service('BlogService', ['$http', function($http) {
    // Implement functions to interact with the REST API
    var baseUrl = '/api/blogs'; // Assuming your backend API endpoint for blogs is '/api/blogs'

    // Function to get all blogs
    this.getAllBlogs = function() {
        return $http.get(baseUrl);
    };

    // Function to add a new blog
    this.addBlog = function(blogData) {
        return $http.post(baseUrl, blogData);
    };

    // Function to get a blog by ID
    this.getBlogById = function(blogId) {
        return $http.get(baseUrl + '/' + blogId);
    };

    // Function to update a blog
    this.updateBlog = function(blogData) {
        return $http.put(baseUrl + '/' + blogData._id, blogData);
    };

    // Function to delete a blog
    this.deleteBlog = function(blogId) {
        return $http.delete(baseUrl + '/' + blogId);
    };
}]);
