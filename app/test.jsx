var CommentBox = React.createClass({
    displayName: 'CommentBox',
    render: function(){
        return (
        React.createElement('div', {classname: "commentBox"},
            "Hello, world! I am a CommentBox."
            )
        );
    }
});

ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);