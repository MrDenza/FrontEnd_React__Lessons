// ----------------------- JavaScript -----------------------
var IshopBox = React.createClass({
	displayName: 'IshopBox',
	propTypes: {
		title: React.PropTypes.string.isRequired,
		widthTablePos: React.PropTypes.number.isRequired,
		products: React.PropTypes.arrayOf(
			React.PropTypes.shape({
				code: React.PropTypes.number.isRequired,
				title: React.PropTypes.string.isRequired,
				photo: React.PropTypes.string.isRequired,
				sum: React.PropTypes.number,
				text: React.PropTypes.string.isRequired,
				lot: React.PropTypes.number,
			})
		) 
	},
	render: function() {
		return (
			React.DOM.div({className: 'ishop'},
				React.createElement(IshopTitle, {title: this.props.title}),
				React.createElement(IshopTable, {widthTablePos: this.props.widthTablePos, products: this.props.products}),
			)
		)
	},
});

//todo: стоит ли везде описывать проптайпc?
//todo: пример С_VB2/VotesBlock(215, 220, 225, 230) ===> пропс code передаётся из VotesBlock в VoteAnswer как key, но в VoteAnswer он нигде не используется - нужно ли указывать его
//todo: в таблице куда лучше вешать атрибут key: на строку всю, или на каждую ячейку? 