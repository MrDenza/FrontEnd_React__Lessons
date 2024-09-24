// ----------------------- JavaScript -----------------------
var IshopTable = React.createClass({
	displayName: 'IshopTable',
	propTypes: {
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
		var size = this.props.widthTablePos;
		var infoProducts = this.props.products.map(function (p) {
			return React.createElement(IshopPosition, {key: p.code, title: p.title, photo: p.photo, sum: p.sum, text: p.text, lot: p.lot});
		});
		return React.DOM.table({className: 'ishop_table'}, 
			React.DOM.tbody(null, infoProducts));
	},
});