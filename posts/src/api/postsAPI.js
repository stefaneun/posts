export const postsAPI = {
    fetchPosts() {

        try {
            return fetch('https://jsonplaceholder.typicode.com/posts?_sort=id&_order=desc')
            .then(response => response.json())  
            .then((posts) => posts.slice(0, 10));
        }
        catch (ex) {
            console.error('Error fetching posts:', ex);
            throw ex;
        }
        
    },

    fetchFreshPosts(limit = 3) {
        try {
            return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_sort=id&_order=desc`)
                .then(response => response.json())
                .then((posts) => posts.slice(0, 10));
        }
        catch (ex) {
            console.error('Error fetching fresh posts:', ex);
            throw ex;
        }
    },

    fetchById(id) {
        try {
            if (!id) {
                throw new Error('No ID provided');
            }
            return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => response.json());
        }

        catch (ex) {
            console.error('Error fetching post by ID:', ex);
            throw ex;
        }
    }



}
