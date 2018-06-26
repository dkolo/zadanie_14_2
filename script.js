var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        image: './images/harry.jpg'
    },
    {
        id: 2,
        title: 'Król lew',
        desc: 'Film o królu sawanny',
        image: './images/lion.jpg'
    },
    {
    	id: 3,
    	title: 'Władca pierścieni',
    	desc: 'Film fantasy o zmaganiach dobra ze złem w świecie stworzonym przez J.R.R. Tolkiena',
    	image: './images/gandalf.jpg'
    },
    {
    	id: 4,
    	title: 'Przyjaciele',
    	desc: 'Serial komediowy opisujący życie szóstki przyjaciół żyjących w Nowym Jorku',
    	image: './images/friends.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.image})
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));