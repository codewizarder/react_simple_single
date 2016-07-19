 var Counter = React.createClass({        
            render: function () {
                  var now = new Date();
                  var topicList = ['Html', 'javascript', 'React'];
                  return (
                    <div>
                      <h1>Hellow</h1>
                      <p className="lead">
                        Current time: {now.toTimeString()}
                      </p>
                      <ul>
                        {topicList.map(function(x){
                         return <li key={x}>{x}</li>
                        }
                        )}
                      </ul>
                    </div>
                  );
            }
          });

var ImageBox = React.createClass({
    render: function(){
        return (
            <img width="500px" src={"http://blogs-images.forbes.com/kristintablang/files/2016/03/Bugatti-Chiron-2016.jpg"} />
        );
    }
})

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
});

var AuthorList = React.createClass({
    propTypes: {
      authors: React.PropTypes.array.isRequired  
    },
    render: function(){
        var createAuthorRow = function(author){
            return (
                <tr key={author.id}>
                    <td>{author.id}</td>
                    <td>{author.firstName}</td>
                    <td>{author.lastName}</td>
                </tr>
            )
        }
        
        return (
            <table className='table'>
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                </tr>
                    {this.props.authors.map(createAuthorRow, this)}
                </tbody>
            </table>
        )
    }
});

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
};

ReactDOM.render(
            <Counter />,
            document.getElementById('mount')
          );

ReactDOM.render(
            <ImageBox />,
            document.getElementById('car')
          );

ReactDOM.render(<AuthorPage />, document.getElementById('authors'))