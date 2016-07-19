var AuthorApi = {
    getAllAuthors: function(){
        var authorsData = [
            {
                id: 'hus-ahmdhq', 
                firstName: 'Husny', 
                lastName: 'Ahamed'
            },	
            {
                id: 'scott-allen', 
                firstName: 'Scott', 
                lastName: 'Allen'
            },	
            {
                id: 'dan-wahlin', 
                firstName: 'Dan', 
                lastName: 'Wahlin'
            }
        ];
        
        return authorsData;
    }
}