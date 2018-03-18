/* @darthvid DNA (React) */

class Card extends React.Component {
	constructor(props) {
		super(props)

	}
	
	render() {
		const cardStyle = {
			backgroundImage: 'url(' + this.props.bgImage + ')',
		};
		
		return (
			<div className="card-wrap">
				<div className="card">
					<div className="card-bg" style={cardStyle}></div>
					<div className="card-info">
						<h1>{this.props.title}</h1>
						<p>{this.props.date}</p>
					</div>
				</div>
			</div>
		)
	}
}

class Deck extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cards: this.props.cardList.map(function(card){
					return (
						<Card
							title	= {card.title}
							bgImage	= {card.bgImage}
							date	= {card.date}
						/>);
				}),
		}
		console.log(this.props.cardList);
		console.log(this.state.cards);
	}
	
	render() {
		return (
			<div id="container">
				{this.state.cards}
			</div>
		)
	}
}



const cardList = [
	{
		title	: "Star Wars",
		bgImage	: "https://33hpwq10j9luq8gl43e62q4e-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/1jw_tyZoU5qoOrOOOvQlBLg.jpeg",
		date	: "25 May 1977",
	},
	{
		title	: "君の名は。",
		bgImage	: "https://iwiz-movies.c.yimg.jp/c/movies/pict/p/p/32/91/169395_02.jpg",
		date	: "3 Jul 2016"	,
	},
];

ReactDOM.render(
	<Deck cardList={cardList} />
	, document.getElementById('root')
);


/*

<Card
					title	= "Star Wars"
					bgImage	= "https://33hpwq10j9luq8gl43e62q4e-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/1jw_tyZoU5qoOrOOOvQlBLg.jpeg"
					date	= "25 May 1977"
				/>
				<Card
					title	= "君の名は。"
					bgImage	= "https://iwiz-movies.c.yimg.jp/c/movies/pict/p/p/32/91/169395_02.jpg"
					date	= "3 Jul 2016"
				/>

		this.state = {
			cardList:	this.props.cardList.map(function(card){
					return (
						<Card
							title		= {card.title}
							bgImage	= {card.bgImage}
							date		= {card.date}
						/>
					)
				})
		}


	<div id="container">
		<Card
			title 	= "Star Wars"
			bgImage	= "https://33hpwq10j9luq8gl43e62q4e-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/1jw_tyZoU5qoOrOOOvQlBLg.jpeg"
			date		= "25 May 1977"
		/>
		<Card
			title 	= "君の名は。"
			bgImage	= "https://iwiz-movies.c.yimg.jp/c/movies/pict/p/p/32/91/169395_02.jpg"
			date		= "3 Jul 2016"
		/>
	</div>


		<div class="card-wrap">
			<div class="card">
				<div class="card-bg" style="background-image: url(&quot;https://33hpwq10j9luq8gl43e62q4e-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/1jw_tyZoU5qoOrOOOvQlBLg.jpeg&quot;);" ></div>
				<div class="card-info">
					<h1>Star Wars</h1>
					<p>25 May 1977</p>
				</div>
			</div>
		</div>

*/