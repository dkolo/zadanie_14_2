var movies = [{
        title: 'Harry Potter',
        desc: 'film o czarodzieju'
    },
    {
        title: 'Król lew',
        desc: 'Film o królu sawanny'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc)
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));