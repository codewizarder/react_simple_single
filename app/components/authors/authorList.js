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
            <table>
                <thead>
                    <th>Id</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                </thead>
                <tbody>
                    {this.props.map(createAuthorRow, this)}
                </tbody>
            </table>
        )
    }
});