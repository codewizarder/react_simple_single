//AuthorApi = {
//    getAllAuthors: function(){
//        var authorsData = [
//            {
//                id: 'hus-ahmdhq', 
//                firstName: 'Husny', 
//                lastName: 'Ahamed'
//            },	
//            {
//                id: 'scott-allen', 
//                firstName: 'Scott', 
//                lastName: 'Allen'
//            },	
//            {
//                id: 'dan-wahlin', 
//                firstName: 'Dan', 
//                lastName: 'Wahlin'
//            }
//        ];
//        
//        return authorsData;
//    }
//}

var AuthorList = require('./components/authors/authorlist');

var AuthorPage = React.createClass({
    getInitialState: function(){
        return {
          authors: []  
        };
    },
    componentDidMount: function(){
        if(this.isMounted){
            this.setState({authors: AuthorApi.getAllAuthors()})
        }
    },
    render: function(){
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
            </div>
        )
    }
})

ReactDOM.render(<AuthorPage />, document.getElementById('authors'))