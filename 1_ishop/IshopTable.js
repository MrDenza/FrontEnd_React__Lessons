// ----------------------- JavaScript -----------------------
var IshopTable = React.createClass({
	displayName: 'IshopTable',
	propTypes: {
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
		var size = this.props.widthTablePos;
		/*var infoProducts = this.props.products.map(function (p) {
			return React.createElement(IshopPosition, {key: p.code, title: p.title, photo: p.photo, sum: p.sum, text: p.text, lot: p.lot});
		});
		console.log(infoProducts);*/
		var buffer = {result: [], cookie: []}
		this.props.products.forEach(function (p,i,all) {
			buffer.cookie.push(React.createElement(IshopPosition, {key: p.code, title: p.title, photo: p.photo, sum: p.sum, text: p.text, lot: p.lot}));
			if (((i + 1) % size === 0 && i !== 0) || all.length - 1 === i) {
				buffer.result.push(React.DOM.tr({key: i,className: 'ishop_table-row'}, buffer.cookie)); //todo: сделать!
				buffer.cookie = [];
			}
		});
		return React.DOM.table({className: 'ishop_table'}, 
			React.DOM.tbody(null, buffer.result));
	},
});